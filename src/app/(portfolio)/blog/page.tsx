import { Metadata } from 'next';

import cn from '@/utils/function/cn';

import { FaPenNib } from "react-icons/fa";

import { HeadingOne } from '@/components/page-flow';
import Separator from '@/components/home/separator';

import AdaptableGrid, { AdaptableGridElementData } from '@/components/others/adaptable-grid/adaptable-grid';

import blogs from '@/asset/data/blog/blog';

import { BlogPost } from '@/utils/types/blog';

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
            <AdaptableGrid
            className='w-full' 
                id={"blog"}
                elementsPerRow={4} 
                asInternalLink
                elements={
                    blogs.map((blog: BlogPost) => (
                        { 
                            content: {
                                name: blog.title,
                                color: blog.color,
                                icon: blog.icon
                            }
                        } satisfies AdaptableGridElementData
                    ))} 
                //hidden 
            />
        </main>
    )
}

export default Blog;