"use client";

import { useEffect, useState } from "react";

import { mdxComponents } from "@/mdx-components";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const BlogContent = ({ source }: { source: string }) => {

    const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

    useEffect(() => {
        let mounted = true;
        (async () => {
            const s = await serialize(source);
            if (mounted) {
                setMdxSource(s);
            }
        })();
        return () => {
            mounted = false;
        };
    }, [source]);

    if (!mdxSource) return null;

    return (
        <article>
            <MDXRemote {...mdxSource} components={mdxComponents} />
        </article>
    );
}

export default BlogContent;
