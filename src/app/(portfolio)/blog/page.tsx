import { Metadata } from 'next';

import { LuPencilLine } from "react-icons/lu";

import { HeadingOne } from '@/components/page-flow';
import Separator from '@/components/others/separator';

import blogs, { BlogPosts } from '@/asset/data/blog/blogs';

import MainPart from '@/components/others/main-part';
import BlogGrid from './_components/blog-grid';

export const metadata: Metadata = {
    title: {
        default: "Blog",
        template: "%s",
    }
}

const Blog = () => {

    const blogCount = blogs.length;

    return (
        <MainPart className='py-14'>
            <div className='w-full flex flex-col items-center'>
                <HeadingOne icon={<LuPencilLine/>}>Blogs <b className='font-extrabold'>( {blogCount} )</b> :</HeadingOne>
                {/* Order by date button */}
                <Separator lite highMargin />
            </div>
            <section>
                <BlogGrid blogs={blogs} />
            </section>
        </MainPart>
    )
}

export default Blog;