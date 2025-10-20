import cn from "@/utils/function/cn";

import Part from "./_part";
import BlogTemplate from "@/components/blog/blog-template";

const Blog = ({ id }: { id: string }) => {
    return (
        <div
        id="blog-modal"
        className={cn(
            "absolute inset-0 w-full h-full overflow-hidden z-20",
            "flex justify-center items-start", 
            "to-animate fade anim-duration-200",
            "bg-white/70 dark:bg-black/70 backdrop-blur-md"
        )}>
            <Part />
            <BlogTemplate id={id} />
        </div>
    )
}

export default Blog;
