import type ChildrenInterface from "@/util/interface/children";

// Usage : [My link](https://example.com) 
export const MdxAnchor = ({ children, href }: ChildrenInterface & { href?: string }) => (
    <a href={href} className='underline underline-offset-2' target='_blank'>
        { children }
    </a>
);
