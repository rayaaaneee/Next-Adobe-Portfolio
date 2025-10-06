import { cn } from "@/lib/utils";

import ContactIcon, { IconSize, type ContactIconType } from "./contact-icon";

import { ChildrenInterface } from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";

import styles from "~/scss/home/footer-links.module.scss";

import { TooltipSize } from "./tooltip";

export interface ContactLinksProps extends ClassNameInterface {
    animate?: boolean;
    tooltips?: boolean;
    tooltipsSize?: TooltipSize;
    size?: IconSize;
}

const ContactLinks = ({className, id, animate = false, tooltips = true, tooltipsSize = TooltipSize.lg, size = IconSize.md}: ContactLinksProps) => {

    if (!tooltips && (tooltipsSize)) {
        throw new Error("tooltipSize cannot be used if tooltip is deactivated");
    }
    

    const usernameDivClassname = 'flex flex-row items-center gap-0';
	const UsernameDivBase = ({ children }: ChildrenInterface) => (<div className={usernameDivClassname}><b>@</b><i>{children}</i></div>);
    
	const linkedinUsername =  <UsernameDivBase>rayanemerlin</UsernameDivBase>;
    const githubUsername = <UsernameDivBase>rayaaaneee</UsernameDivBase>;

    const footerLinks: ContactIconType[] = [
        { title: "Linked In", username: linkedinUsername, className: styles.linkedin, link: "https://www.linkedin.com/in/rayanemerlin/", target: "_blank", rel: "noreferrer" },
        { title: "Github", username: githubUsername, className: styles.github, link: "https://github.com/rayaaaneee", target: "_blank", rel: "noreferrer" },
        { title: "Mail", className: styles.mail, link: "mailto:rayane.merlin8@gmail.com" },
        { title: "Phone", className: styles.phone, link: "tel:+33768283277" },
        { title: "Resume", className: styles.resume, link: "/Resume_Rayane_Merlin.pdf", target: "_blank", rel: "noreferrer" },
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
                        {[`anim-delay-${1200 + (index * 200)}`]: animate},
                    ) : undefined}
                    key={index}
                    link={link}
                />
            ))}
        </ul>
  	)
}

export default ContactLinks

