"use client";

import useLanguage from '@/util/hook/use-language';

import { FaLocationDot } from 'react-icons/fa6';

import { HeadingOne, HeadingThree, Paragraph } from '@/components/page-flow';

const HeaderText = () => {

    const { language } = useLanguage();

    return (
        <>
            <HeadingOne id="name" className="mt-0" isAnchorLink>Rayane Merlin</HeadingOne>
            <Paragraph>{ language.home.role }</Paragraph>
            <HeadingThree containerClassName="!ml-0" icon={<FaLocationDot/>}>{ language.home.location.city }, { language.home.location.country }</HeadingThree>
        </>
    )
}

export default HeaderText;
