import blogs from "@/asset/data/blog/blogs";

import { assertFound } from "@/utils/function/assert-found";

import BlogTemplate from "@/components/blog/blog-template";
import { Metadata } from "next";

export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {

    const { id } = await params;

    const blog = assertFound(blogs, (blog) => blog.id === id, `Blog with id : ${id}`);

    console.log(blog.title);

    return {
        title: blog.title,
    };
}

const Page = async ({ params }: PageProps) => {
    
    const { id } = await params;

    return (
        <BlogTemplate 
            className="backdrop-blur-md"
            id={id}
        />
    )
}

export default Page;