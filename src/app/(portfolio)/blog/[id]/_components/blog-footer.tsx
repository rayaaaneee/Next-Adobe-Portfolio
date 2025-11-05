import { HeadingThree } from '@/components/page-flow';
import Separator from '@/components/others/separator';

import ShareButtons from './share-buttons';

import ManageLanguages from '@/utils/manager/manage-language';

import { BlogPost } from '@/utils/types/blog';
import { DeepReadonlyable } from '@/utils/types/deep-readonly';


export interface BlogFooterProps {
    blog: DeepReadonlyable<BlogPost>;

}

const BlogFooter = ({ blog }: BlogFooterProps) => {
    return (
        <article id='blog-footer' className='flex flex-col center gap-4'>
            <Separator className='!mb-0'/>
            <HeadingThree containerClassName='!m-0'>{ ManageLanguages.getSentences(blog.language).blog.footer } 🚀</HeadingThree>
            <ShareButtons blog={blog} />
            <Separator className='!mt-0'/>
        </article>
    );
}

export default BlogFooter;
