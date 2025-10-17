import { HeadingOne } from '@/components/page-flow';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';

import { FaPenNib } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Blog",
}

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    summary: string;
}

const Blog = () => {

    const blogs: BlogPost[] = [
        {
            id: "svg-customization",
            title: "SVG customization using SVGR",
            date: "2024-01-01",
            summary: "This is a summary of my first blog post.",
        },
        {
            id: "deep-learning-snake-ai",
            title: "Deep Learning : Snake AI Overview",
            date: "2024-02-01",
            summary: "This is a summary of my second blog post.",
        }
    ]

    const blogCount = blogs.length;

    return (
        <main className={cn("w-full h-full p-28 box-border")}>
            <HeadingOne icon={<FaPenNib className='text-[0.8em]' />}>Blogs ({blogCount}) :</HeadingOne>
            {/* Order by date button */}
            <div className='w-full h-fit my-8 flex flex-row items-center justify-start flex-wrap'>
                {/* <p className='mt-10 text-lg text-gray-600 dark:text-gray-300'>No blog post has been published yet. Please check back later.</p> */}
                {blogs.map((blog) => (
                    <div 
                    key={blog.id} 
                    className={cn(
                        "bg-white/80 hover:bg-white/100 dark:bg-gray-800/80 hover:dark:bg-gray-800/100",
                        "transition-colors duration-200 ease-in-out",
                        "w-full md:w-1/2 lg:w-1/3 h-fit p-4 m-2 ",
                        "rounded-lg cursor-pointer"
                    )}>
                        <Link href={`/blog/${blog.id}`} className='no-underline'>
                            <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>{blog.title}</h2>
                            <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>{new Date(blog.date).toLocaleDateString()}</p>
                            <p className='text-md text-gray-600 dark:text-gray-300 mt-2'>{blog.summary}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Blog;