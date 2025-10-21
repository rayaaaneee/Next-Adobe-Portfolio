import { assertFoundBlog } from "@/asset/data/blog/blogs";

import BlogTemplate from "@/components/blog/blog-template";
import { Metadata } from "next";

export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {

    const { id } = await params;

    const blog = assertFoundBlog(id);

    return {
        title: blog.title,
    }
}

const Page = async ({ params }: PageProps) => {
    
    const { id } = await params;

    const blog = assertFoundBlog(id);

    return (
        <BlogTemplate 
            className="backdrop-blur-md"
            blog={blog}
        />
    )
}

export default Page;