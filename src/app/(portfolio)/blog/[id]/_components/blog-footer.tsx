import { HeadingThree, Paragraph } from '@/components/page-flow';
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
            {/* <Tooltip text={<span dangerouslySetInnerHTML={{ __html: "Except where otherwise noted, this article is licensed under a Creative Commons<br/>Attribution 4.0 International License © by the author." }} />} > */}
                <Paragraph className='!m-0'>&copy; This post is licensed under the <a href='https://creativecommons.org/licenses/by/4.0/' target='_blank' className='underline underline-offset-2 font-semibold'>CC BY 4.0</a> license. </Paragraph>
            {/* </Tooltip> */}
        </article>
    );
}

export default BlogFooter;
