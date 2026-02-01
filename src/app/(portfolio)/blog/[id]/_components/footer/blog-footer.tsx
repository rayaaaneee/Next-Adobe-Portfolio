import Separator from '@/components/other/separator';

import BlogFooterText from './blog-footer-text';
import BlogShareButtons from './blog-share-buttons';
import BlogRights from './blog-rights';

import type BlogPost from '@/util/type/blog';
import { type DeepReadonlyable } from '@/util/type/deep-readonly';

export interface BlogFooterProps {
    blog: DeepReadonlyable<BlogPost>;
}

const BlogFooter = ({ blog }: BlogFooterProps) => (
    <article id='blog-footer' className='flex flex-col center gap-4'>
        <Separator className='!mb-0'/>
        <BlogFooterText />
        <BlogShareButtons blog={blog} />
        <Separator className='!mt-0'/>
        <BlogRights />
    </article>
);

export default BlogFooter;


