import { cn } from "@/lib/utils";

import FooterIcon, { type FooterIconType } from "./footer-icon";

import styles from "@/asset/scss/home/footer-links.module.scss";
import ChildrenInterface from "@/utils/interface/children-interface";


const FooterLinks = () => {

    const usernameDivClassname = 'flex flex-row items-center gap-0';
	const UsernameDivBase = ({ children }: ChildrenInterface) => (<div className={usernameDivClassname}><b>@</b><i>{children}</i></div>);
    
	const linkedinUsername =  <UsernameDivBase>rayanemerlin</UsernameDivBase>;
    const githubUsername = <UsernameDivBase>rayaaaneee</UsernameDivBase>;

    const footerLinks: FooterIconType[] = [
        { title: "Linked In", username: linkedinUsername, className: styles.linkedin, link: "https://www.linkedin.com/in/rayanemerlin/", target: "_blank", rel: "noreferrer" },
        { title: "Github", username: githubUsername, className: styles.github, link: "https://github.com/rayaaaneee", target: "_blank", rel: "noreferrer" },
        { title: "Mail", className: styles.mail, link: "mailto:rayane.merlin8@gmail.com" },
        { title: "Phone", className: styles.phone, link: "tel:+33768283277" },
        { title: "Resume", className: styles.resume, link: "/Resume_Rayane_Merlin.pdf", target: "_blank", rel: "noreferrer", download: true },
    ]
	
  	return (
  	  	<article id='footer' className={cn('absolute bottom-0 left-0 w-full h-fit')}>
            <ul className={cn("w-full flex flex-row items-center justify-center gap-[8vw] list-none mb-4")}>
                { footerLinks.map((link: FooterIconType, index: number) => (
                    <FooterIcon
						className={cn(
							'to-animate appear translate-y-3',
                    		`anim-delay-${1200 + (index * 200)}`,
						)}
                        key={index}
                        link={link}
                    />
                ))}
            </ul>
        </article>
  	)
}

export default FooterLinks

