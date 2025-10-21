import Blog from "./_blog";
import { assertFoundBlog } from "@/asset/data/blog/blogs";
import { Metadata } from "next";

export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const Page = async ({ params }: PageProps) => {

    const { id } = await params;

    const blog = assertFoundBlog(id);

    return (<Blog blog={blog} />)
}

export default Page;
