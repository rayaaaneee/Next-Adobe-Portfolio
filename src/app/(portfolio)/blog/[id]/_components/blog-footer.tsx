import { HeadingThree } from '@/components/page-flow';
import Separator from '@/components/other/separator';

import BlogShareButtons from './blog-share-buttons';
import BlogRights from './blog-rights';

import ManageLanguages from '@/util/manager/manage-language';

import { BlogPost } from '@/util/type/blog';
import { DeepReadonlyable } from '@/util/type/deep-readonly';

export interface BlogFooterProps {
    blog: DeepReadonlyable<BlogPost>;

}

const BlogFooter = ({ blog }: BlogFooterProps) => {
    return (
        <article id='blog-footer' className='flex flex-col center gap-4'>
            <Separator className='!mb-0'/>
            <HeadingThree containerClassName='!m-0'>{ ManageLanguages.getSentences(blog.language).blog.footer } 🚀</HeadingThree>
            <BlogShareButtons blog={blog} />
            <Separator className='!mt-0'/>
            <BlogRights />
        </article>
    );
}

export default BlogFooter;
