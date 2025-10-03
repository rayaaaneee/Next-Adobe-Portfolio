import { cn } from "@/lib/utils";

import ContactIcon, { IconSize, type ContactIconType } from "./contact-icon";

import styles from "@/asset/scss/home/footer-links.module.scss";
import { ChildrenInterface } from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";

export interface ContactLinksProps extends ClassNameInterface {
    id?: string;
    animate?: boolean;
    tooltip?: boolean;
    size?: IconSize;
}

const ContactLinks = ({className, id, animate = false, tooltip = true, size = IconSize.md}: ContactLinksProps) => {

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
  	  	<article id={id} className={className}>
            <ul className={cn("w-full flex flex-row items-center justify-center gap-[8vw] list-none mb-4")}>
                { footerLinks.map((link: ContactIconType, index: number) => (
                    <ContactIcon
                        size={size}
                        tooltip={tooltip}
                        tooltipClassName={tooltip ? cn(
                            {'to-animate appear translate-y-3': animate},
                            {[`anim-delay-${1200 + (index * 200)}`]: animate},
                        ) : undefined}
                        key={index}
                        link={link}
                    />
                ))}
            </ul>
        </article>
  	)
}

export default ContactLinks

