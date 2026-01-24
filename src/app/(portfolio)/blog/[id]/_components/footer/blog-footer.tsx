import Separator from '@/components/other/separator';

import BlogShareButtons from './blog-share-buttons';
import BlogRights from './blog-rights';

import BlogPost from '@/util/type/blog';
import { DeepReadonlyable } from '@/util/type/deep-readonly';
import Title from './blog-footer-text';

export interface BlogFooterProps {
    blog: DeepReadonlyable<BlogPost>;
}

const BlogFooter = ({ blog }: BlogFooterProps) => (
    <article id='blog-footer' className='flex flex-col center gap-4'>
        <Separator className='!mb-0'/>
        <Title />
        <BlogShareButtons blog={blog} />
        <Separator className='!mt-0'/>
        <BlogRights />
    </article>
);

export default BlogFooter;


