import { Metadata } from 'next';

import { cn } from '@/lib/utils';

import Separator from '@/components/home/separator';
import { HeadingOne } from '@/components/page-flow';

import blogs from '@/asset/data/blog/blog';

import { FaPenNib } from "react-icons/fa";
import BlogCard from '@/components/blog/blog-card';

export const metadata: Metadata = {
    title: "Blog",
}

const Blog = () => {

    const blogCount = blogs.length;

    return (
        <main className={cn("w-full h-full p-28 box-border")}>
            <div className='w-full flex flex-col items-center'>
                <HeadingOne icon={<FaPenNib className='text-[0.8em]' />}>Blogs ({blogCount}) :</HeadingOne>
                {/* Order by date button */}
                <Separator lite highMargin />
            </div>
            <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* <p className='mt-10 text-lg text-gray-600 dark:text-gray-300'>No blog post has been published yet. Please check back later.</p> */}
                {blogs.map((blog, i) => (
                    <BlogCard blog={blog} i={i} key={i} />
                ))}
            </div>
        </main>
    )
}

export default Blog;