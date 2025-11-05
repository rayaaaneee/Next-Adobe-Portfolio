import { Metadata } from 'next';

import { LuPencilLine } from "react-icons/lu";
import { FaRss } from "react-icons/fa";

import { AnchorLinkButton, HeadingOne } from '@/components/page-flow';
import Separator from '@/components/others/separator';
import MainPart from '@/components/others/main-part';
import BlogGrid from './_components/blog-grid';

import getBlogs from '@/asset/data/blog/blogs';

export const metadata: Metadata = {
    title: {
        default: "Blog",
        template: "%s",
    }
}

const Blog = () => {

    const blogCount = getBlogs().length;

    return (
        <MainPart className='py-14'>
                <AnchorLinkButton 
                    href="/feed.xml" 
                    className='absolute top-0 right-0'
                    buttonClassName='w-fit m-0 p-4 text-[1.5em] rounded-none rounded-bl-md hover:bg-gray-200' 
                >
                    <FaRss className='text-black dark:text-white' />
                </AnchorLinkButton>
            <div className='w-full flex flex-col items-center'>
                <HeadingOne icon={<LuPencilLine/>}>Blogs <b className='font-extrabold'>( {blogCount} )</b> :</HeadingOne>
                {/* Order by date button */}
                <Separator lite highMargin />
            </div>
            <section>
                <BlogGrid />
            </section>
        </MainPart>
    )
}

export default Blog;