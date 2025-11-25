import { Nullish } from "@/util/type/nullable";

const getBlogElement = (baseElement: Nullish<HTMLElement>): HTMLElement => {

    if (!baseElement) throw new Error("Blog content element not found while clearing blog element.");

    const blogElementCopy = baseElement.cloneNode(true) as HTMLElement;

    const blogContent = blogElementCopy.querySelector('#blog-table-of-contents');
    if (!blogContent) throw new Error("Blog content element not found while clearing blog element.");

    const blogHeader = blogElementCopy.querySelector('#blog-header');
    if (!blogHeader) throw new Error("Blog header element not found while clearing blog element.");

    const blogFooter = blogElementCopy.querySelector('#blog-footer');
    if (!blogFooter) throw new Error("Blog footer element not found while clearing blog element.");

    const blogCodeBlocks = blogElementCopy.querySelectorAll('.code-block');

    blogContent.remove();
    blogHeader.remove();
    blogFooter.remove();
    blogCodeBlocks.forEach((block) => block.remove());

    return blogElementCopy;
    
}

export default getBlogElement;