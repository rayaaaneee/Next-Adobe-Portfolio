"use client";

import useLanguage from '@/util/hook/use-language';

import cn from '@/util/function/cn';

import { FaLink } from 'react-icons/fa';

import { HeadingThree } from '@/components/page-flow';

import { TooltipSize } from '@/components/tooltip';

import { IconSize } from '@/components/contact-icon';
import ContactLinks from '@/components/contact-links';

const HeaderLinks = () => {

    const { language } = useLanguage();

    return (
        <>
            <HeadingThree icon={<FaLink/>} containerClassName="!ml-0 max-sm:mt-0">{ language.home.links.title }</HeadingThree>
            <ContactLinks size={IconSize.sm} tooltipsSize={TooltipSize.md} tooltips className={cn(
                "w-fit mt-4 justify-between",
                ["max-sm:mt-2 max-sm:mb-0"],
                [
                    "gap-4 mx-auto",
                    "sm:gap-4 sm:mx-0",
                    "md:gap-5",
                    "lg:gap-6",
                    "xl:gap-7"
                ]
            )} />
        </>
    )
}

export default HeaderLinks;
