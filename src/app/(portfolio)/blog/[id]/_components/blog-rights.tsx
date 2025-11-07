"use client";

import { AnchorLinkText, Paragraph } from '@/components/page-flow';
import useLanguage from '@/utils/hook/use-language';

const BlogRights = () => {

    const { language } = useLanguage();

    return (
        <Paragraph className='!m-0'>
            <span>&copy; </span>
            <span>
                { language.blog.rights.split('{cc}')[0] }
                <AnchorLinkText href='https://creativecommons.org/licenses/by/4.0/' className='underline underline-offset-2 font-semibold'>CC BY 4.0</AnchorLinkText>
                { language.blog.rights.split('{cc}')[1] }
            </span>
        </Paragraph>
    )
}

export default BlogRights;