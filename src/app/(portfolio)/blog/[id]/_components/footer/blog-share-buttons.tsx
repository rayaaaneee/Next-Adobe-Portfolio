"use client";

import useLanguage from "@/util/hook/use-language";

import { FaFacebookF, FaLink, FaLinkedinIn, FaRedditAlien, FaTwitter } from "react-icons/fa6";

import { HeadingThree } from "@/components/page-flow/page-flow";
import Tooltip, { TooltipSize } from "@/components/tooltip/tooltip";
import CopyButton from "@/components/other/copy-button";

import { BlogFooterProps } from "./blog-footer";

import cn from "@/util/function/cn";
import assertDefined from "@/util/function/assert-defined";

import ClassNameInterface from "@/util/interface/classname";
import { ChildrenType } from "@/util/interface/children";

const formatTemplateLink = (template: string, url: string, text?: string) => {
    let formattedLink = template.replace("{url}", encodeURIComponent(url));
    if (text) {
        formattedLink = formattedLink.replace("{text}", encodeURIComponent(text));
    }
    return formattedLink;
}


interface ShareButtonProps {
    url: string;
    text?: string;
}

interface BaseShareButtonProps extends ShareButtonProps, ClassNameInterface {
    icon: ChildrenType;
    platform: string;
}

const BaseShareButton = ({ icon, url, className, platform }: BaseShareButtonProps) => {
    return (
        <Tooltip size={TooltipSize.md} literalText={platform}>
            <a href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                    'flex center',
                    'p-3 rounded-full',
                    'hover:underline text-white text-[1.4em]',
                    'transition-colors duration-300', 
                    className
                )}
            >
                {icon}
            </a>
        </Tooltip>
    );
}

const TwitterShareButton = ({ url, text }: ShareButtonProps) => {

    const templateLink = `https://twitter.com/intent/tweet?url={url}&text={text}`;

    return (
        <BaseShareButton 
            platform="Twitter"
            icon={<FaTwitter />}
            url={formatTemplateLink(templateLink, url, text)} 
            className="bg-blue-500/60 hover:bg-blue-500/80"
        />
    );
}

const FacebookShareButton = ({ url }: ShareButtonProps) => {

    const templateLink = `https://www.facebook.com/sharer/sharer.php?u={url}`;

    return (
        <BaseShareButton 
            platform="Facebook"
            icon={<FaFacebookF />}
            url={formatTemplateLink(templateLink, url)} 
            className="bg-blue-700/60 hover:bg-blue-700/80"
        />
    );
}

const LinkedInShareButton = ({ url, text }: ShareButtonProps) => {

    const templateLink = `https://www.linkedin.com/shareArticle?mini=true&url={url}&title={text}`;

    return (
        <BaseShareButton 
            platform="LinkedIn"
            icon={<FaLinkedinIn />}
            url={formatTemplateLink(templateLink, url, text)} 
            className="bg-blue-700/60 hover:bg-blue-700/80"
        />
    );
}

const RedditShareButton = ({ url, text }: ShareButtonProps) => {

    const templateLink = `https://www.reddit.com/submit?url={url}&title={text}`;

    return (
        <BaseShareButton 
            platform="Reddit"
            icon={<FaRedditAlien />}
            url={formatTemplateLink(templateLink, url, text)} 
            className="bg-[#FF4500]/60 hover:bg-[#FF4500]/80"
        />
    );
}

const CopyLinkButton = ({ url }: ShareButtonProps) => (
    <CopyButton 
        alwaysShowTooltip 
        text={url} 
        tooltipText="blog.copy_button.text" 
        tooltipCopiedText="blog.copy_button.copiedText" 
        customIcon={<FaLink />}
        changeIconOnCopy={false}
        resetTooltipOnLeaving 
        keepTooltipTextOnCopy={false} 
        className={cn(
            'p-3 rounded-full',
            'bg-gray-500/60 hover:bg-gray-500/80 text-[1.4em]',
        )} 
    />
);

const BlogShareButtons = ({ blog }: BlogFooterProps) => {

    const { t, lang } = useLanguage();

    const url = `${assertDefined(process.env.NEXT_PUBLIC_DOMAIN)}/blog/${blog.id}`;

    const text = `${assertDefined(process.env.NEXT_PUBLIC_NAME)} - ${blog.title[lang]}`;

    return (
        <div className='flex flex-row center gap-3'>
            <HeadingThree containerClassName="!m-0">{t("blog.share")} :</HeadingThree>
            <TwitterShareButton url={url} text={text} />
            <FacebookShareButton url={url} />
            <LinkedInShareButton url={url} text={text} />
            <RedditShareButton url={url} text={text} />
            <CopyLinkButton url={url} />
        </div>
    )
}

export default BlogShareButtons;
