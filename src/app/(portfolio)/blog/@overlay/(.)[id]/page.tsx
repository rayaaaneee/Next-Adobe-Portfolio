import Blog from "./_blog";
import { assertFound } from "@/utils/function/assert-found";
import blogs from "@/asset/data/blog/blog";
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

    return (<Blog id={id} />)
}

export default Page;
