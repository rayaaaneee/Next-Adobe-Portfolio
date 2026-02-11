import { ChildrenType } from "@/util/interface/children";

/* For code block */
export const MdxPre = ({ children, ...props }: { children: ChildrenType[] }) => (<pre {...props}>{children}</pre>);