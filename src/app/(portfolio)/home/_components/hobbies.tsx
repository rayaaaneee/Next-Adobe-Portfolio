"use client";

import useLanguage from '@/util/hook/use-language';

import { HeadingOne } from '@/components/page-flow/page-flow';

const Hobbies = () => {

    const { t } = useLanguage();

    return (
        <HeadingOne id="hobbies" isAnchorLink>{t('home.hobbies.title')}</HeadingOne>
    )
}

export default Hobbies;
