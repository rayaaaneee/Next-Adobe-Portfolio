import type ChildrenInterface from "@/util/interface/children";

import { ArticleWrapper } from "./article-wrapper";

import { Paragraph } from "@/components/page-flow/components/paragraph";

import { ParagraphAlignment } from "@/components/page-flow/types/paragraph-alignment";

// Usage: My paragraph...
export const MdxParagraph = ({ children }: ChildrenInterface) => (
    <ArticleWrapper>
        <Paragraph alignment={ParagraphAlignment.justify}>{ children }</Paragraph>
    </ArticleWrapper>
);