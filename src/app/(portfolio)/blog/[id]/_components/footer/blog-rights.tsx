"use client";

import { AnchorLinkText, Paragraph } from '@/components/page-flow';
import useLanguage from '@/util/hook/use-language';

const BlogRights = () => {

    const { t } = useLanguage();

    return (
        <Paragraph className='!m-0'>
            <span>&copy; </span>
            <span>
                { t('blog.rights').split('{cc}')[0] }
                <AnchorLinkText href='https://creativecommons.org/licenses/by/4.0/' className='underline underline-offset-2 font-semibold'>CC BY 4.0</AnchorLinkText>
                { t('blog.rights').split('{cc}')[1] }
            </span>
        </Paragraph>
    )
}

export default BlogRights;