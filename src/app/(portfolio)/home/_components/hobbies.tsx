"use client";

import useLanguage from '@/utils/hook/use-language';

import { HeadingOne } from '@/components/page-flow';

const Hobbies = () => {

    const { language } = useLanguage();
    return (
        <HeadingOne id="hobbies" isAnchorLink>{language.home.hobbies.title}</HeadingOne>
    )
}

export default Hobbies;
