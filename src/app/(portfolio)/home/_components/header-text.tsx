"use client";

import useLanguage from '@/util/hook/use-language';

import { FaLocationDot } from 'react-icons/fa6';

import { HeadingOne, HeadingThree, Paragraph } from '@/components/page-flow/page-flow';

const HeaderText = () => {

    const { t } = useLanguage();

    return (
        <>
            <HeadingOne id="name" className="mt-0" isAnchorLink>Rayane Merlin</HeadingOne>
            <Paragraph>{ t('home.role') }</Paragraph>
            <HeadingThree containerClassName="!ml-0" icon={<FaLocationDot/>}>{ t('home.location.city') }, { t('home.location.country') }</HeadingThree>
        </>
    )
}

export default HeaderText;
