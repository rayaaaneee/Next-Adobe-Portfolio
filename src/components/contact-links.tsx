"use client";

import cn from "@/util/function/cn";

import useLanguage from "@/util/hook/use-language";

import ContactIcon, { IconSize, type ContactIconType } from "./contact-icon";

import ChildrenInterface from "@/util/interface/children";
import ClassNameInterface from "@/util/interface/classname";

import { TooltipSize } from "./tooltip/tooltip";

import linkedInImg from "~/img/components/contact-links/icon-linkedin.png";
import githubImg from "~/img/components/contact-links/icon-github.png";
import whiteGithubImg from "~/img/components/contact-links/icon-github-white.png";
import mailImg from "~/img/components/contact-links/icon-mail.png";
import phoneImg from "~/img/components/contact-links/icon-phone.png";
import resumeImg from "~/img/components/contact-links/icon-resume.png";
import assertDefined from "@/util/function/assert-defined";

export interface ContactLinksProps extends ClassNameInterface {
    animate?: boolean;
    tooltips?: boolean;
    tooltipsSize?: TooltipSize;
    size?: IconSize;
}

const ContactLinks = ({className, id, animate = false, tooltips = true, tooltipsSize = TooltipSize.lg, size = IconSize.md}: ContactLinksProps) => {

    const { t } = useLanguage();

    if (!tooltips && (tooltipsSize)) {
        throw new Error("tooltipSize cannot be used if tooltip is deactivated");
    }
    
    const usernameDivClassname = 'flex flex-row items-center gap-0';
	const UsernameDivBase = ({ children }: ChildrenInterface) => (<div className={usernameDivClassname}><b>@</b><i>{children}</i></div>);

	const linkedinUsername: string = "rayanemerlin";
    const githubUsername: string = "rayaaaneee";

    const footerLinks: ContactIconType[] = [
        { 
            title: "Linked In", 
            image: linkedInImg,
            username: <UsernameDivBase>{linkedinUsername}</UsernameDivBase>, 
            href: `https://www.linkedin.com/in/${linkedinUsername}/`, 
            target: "_blank", 
            rel: "noreferrer",
            id: "contact-link-linkedin"
        },
        { 
            title: "Github", 
            image: githubImg, 
            darkImage: whiteGithubImg, 
            username: <UsernameDivBase>{githubUsername}</UsernameDivBase>, 
            href: `https://github.com/${githubUsername}`, 
            target: "_blank", 
            rel: "noreferrer",
            id: "contact-link-github"
        },
        { 
            title: t('home.links.mail'), 
            image: mailImg,
            href: `mailto:${assertDefined<string>(process.env.NEXT_PUBLIC_EMAIL, 'NEXT_PUBLIC_EMAIL')}`,
            target: "_blank", 
            rel: "noreferrer",
            id: "contact-link-mail"
        },
        { 
            title: t('home.links.phone'), 
            image: phoneImg,
            href: `tel:${assertDefined<string>(process.env.NEXT_PUBLIC_TEL, 'NEXT_PUBLIC_TEL')}`,
            id: "contact-link-phone"
        },
        { 
            title: t('home.links.resume'), 
            image: resumeImg,
            href: "/resume", 
            target: "_blank", 
            rel: "noreferrer",
            id: "contact-link-resume"
        },
    ]
	
  	return (
        <ul id={id} className={cn(
            "w-full flex flex-row items-center list-none mb-4", 
            className
        )}>
            { footerLinks.map((link: ContactIconType, index: number) => (
                <ContactIcon
                    size={size}
                    tooltip={tooltips}
                    tooltipSize={tooltipsSize}
                    tooltipClassName={tooltips ? cn(
                        {'to-animate appear translate-y-3': animate},
                        {[`anim-delay-${1000 + (index * 100)}`]: animate},
                    ) : undefined}
                    key={index}
                    link={link}
                />
            ))}
        </ul>
  	)
}

export default ContactLinks;