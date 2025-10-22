import BlogTemplate from "@/components/blog/blog-template";
import { assertFoundBlog } from "@/asset/data/blog/blogs";
import Part from "./_part";
import cn from "@/utils/function/cn";

export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const Page = async ({ params }: PageProps) => {

    const { id } = await params;

    const blog = assertFoundBlog(id);

    return (
        <div
            id="blog-modal"
            className={cn(
                "fixed scroll-smooth scrollbar-thin inset-0 w-full h-full overflow-y-auto overflow-x-hidden z-20",
                "flex justify-center items-start", 
                "to-animate fade anim-duration-200",
            )}>
                <Part />
                <BlogTemplate blog={blog} />
        </div>
    );
}

export default Page;
