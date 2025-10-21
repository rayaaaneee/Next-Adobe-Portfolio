import Blog from "./_blog";
import { assertFoundBlog } from "@/asset/data/blog/blogs";
import { Metadata } from "next";

export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {

    const { id } = await params;

    const blog = assertFoundBlog(id);

    console.log(blog.title);

    return {
        title: blog.title,
    };
}

const Page = async ({ params }: PageProps) => {

    const { id } = await params;

    const blog = assertFoundBlog(id);

    return (<Blog blog={blog} />)
}

export default Page;
