"use client";

import { useRouter } from "next/navigation";
import BlogTemplate from "@/components/blog/blog-template";

const Blog = ({ id }: { id: string }) => {

    const router = useRouter();

    const closePage = () => (router.back());

    return (
        <BlogTemplate
            quitButtonClassName="top-14 right-14"
            onClose={closePage}
            onBackgroundClick={closePage}
            id={id}
        />
    )
}

export default Blog;
