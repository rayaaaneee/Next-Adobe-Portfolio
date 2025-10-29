"use client";

import useLanguage from '@/utils/hook/use-language';

import cn from '@/utils/function/cn';

import { FaLink } from 'react-icons/fa';

import { HeadingThree } from '@/components/page-flow';

import { TooltipSize } from '@/components/tooltip';

import { IconSize } from '@/components/contact-icon';
import ContactLinks from '@/components/contact-links';

const HeaderLinks = () => {

    const { language } = useLanguage();

    return (
        <>
            <HeadingThree icon={<FaLink/>} containerClassName="!ml-0">{ language.home.links.title }</HeadingThree>
            <ContactLinks size={IconSize.sm} tooltipsSize={TooltipSize.md} tooltips className={cn(
                "w-fit mt-4 justify-between",
                [
                    "gap-4 mx-auto",
                    "xs:mx-0",
                    "sm:gap-4",
                    "md:gap-5",
                    "lg:gap-6",
                    "xl:gap-7"
                ]
            )} />
        </>
    )
}

export default HeaderLinks;
