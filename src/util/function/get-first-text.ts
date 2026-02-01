import { cloneElement, isValidElement, ReactNode } from "react";

export interface PropChildren {
    children: ReactNode;
}

type TextHandler = (text: string) => string;

const walkFirstText = (
  node: ReactNode,
  handler: TextHandler,
  state: { done: boolean } = { done: false }
): ReactNode => {
    
    if (state.done) return node;

    if (typeof node === "string") {
        state.done = true;
        return handler(node);
    }

    if (typeof node === "number") {
        state.done = true;
        return handler(String(node));
    }

    if (Array.isArray(node)) {
        return node.map(child =>
        state.done ? child : walkFirstText(child, handler, state)
        );
    }

    if (isValidElement<PropChildren>(node)) {
        const newChildren = walkFirstText(node.props.children, handler, state);

        if (newChildren === node.props.children) return node;

        return cloneElement(node, {
            ...node.props,
            children: newChildren,
        });
    }

    return node;
};

const getFirstText = (el: ReactNode): string => {

    let result = "";

    walkFirstText(
        el,
        text => {
            result = text;
            return text;
        },
    );

    return result;

};


export const removeFromFirstText = (

  str: string,
  node: ReactNode

): ReactNode => (
    walkFirstText(
        node,
        text => text.replace(str, ""),
    )
);


export default getFirstText;