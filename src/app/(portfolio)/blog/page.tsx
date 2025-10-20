import { Metadata } from 'next';

import { FaPenNib } from "react-icons/fa";

import { HeadingOne } from '@/components/page-flow';
import Separator from '@/components/others/separator';

import AdaptableGrid, { AdaptableGridElementData } from '@/components/others/adaptable-grid';

import blogs from '@/asset/data/blog/blogs';

import { BlogPost } from '@/utils/types/blog';
import MainPart from '@/components/others/main-part';

export const metadata: Metadata = {
    title: {
        default: "Blog",
        template: "%s",
    }
}

const Blog = () => {

    const blogCount = blogs.length;

    return (
        <MainPart className='w-full h-full py-14'>
            <div className='w-full flex flex-col items-center'>
                <HeadingOne icon={<FaPenNib className='text-[0.8em]' />}>Blogs ({blogCount}) :</HeadingOne>
                {/* Order by date button */}
                <Separator lite highMargin />
            </div>
            <section>
                <AdaptableGrid
                    id={"blog"}
                    elementsPerRow={4}
                    asInternalLink
                    elements={
                        blogs.map((blog: BlogPost) => (
                            { 
                                content: {
                                    name: blog.title,
                                    color: blog.color,
                                    icon: blog.icon,
                                    link: `/blog/${blog.id}`,
                                }
                            } satisfies AdaptableGridElementData
                        ))} 
                    //hidden 
                />
            </section>
        </MainPart>
    )
}

export default Blog;