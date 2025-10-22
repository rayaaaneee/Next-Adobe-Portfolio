import { Metadata } from 'next';

import { LuPencilLine } from "react-icons/lu";

import { HeadingOne } from '@/components/page-flow';
import Separator from '@/components/others/separator';

import AdaptiveGrid, { AdaptiveGridElementData } from '@/components/others/adaptive-grid';

import blogs from '@/asset/data/blog/blogs';

import { BlogPost } from '@/utils/types/blog';
import MainPart from '@/components/others/main-part';
import { DeepReadonliable } from '@/utils/types/deep-readonly';

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
                <AdaptiveGrid
                    id={"blog"}
                    elementsPerRow={4}
                    asInternalLink
                    elements={
                        blogs.map((blog: DeepReadonliable<BlogPost>) => (
                            { 
                                content: {
                                    name: blog.title,
                                    color: blog.color,
                                    icon: blog.icon,
                                    link: `/blog/${blog.id}`,
                                }
                            } satisfies AdaptiveGridElementData
                        ))} 
                    //hidden 
                />
            </section>
        </MainPart>
    )
}

export default Blog;