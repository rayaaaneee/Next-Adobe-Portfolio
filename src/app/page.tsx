"use client"; // Temporary

import Link from 'next/link';

import useTryingContext from '@/utils/hook/use-try-context';
import { useTypewriter } from 'react-simple-typewriter';

import { cn } from '@/lib/utils';

import languageContext from '@/utils/context/language-context';

import GetStarted from '@/components/home/get-started';

import styles from "@/asset/scss/home/footer-links.module.scss";
import Tooltip, { TooltipPosition, TooltipSize } from '@/components/tooltip';

const Home = () => {

    const { language } = useTryingContext(languageContext);

    const textTab: string[] = language.home.description;
    const shortedTextTab: string[] = language.home.shorted_description;

    const template = {
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 50,
    }

    const [textTypeWriter] = useTypewriter({
        words: textTab,
        ...template
    });

    const [shortedTextTypeWriter] = useTypewriter({
        words: shortedTextTab,
        ...template
    });

    interface FooterLink { title: string, className: string, link: string, username?: string, target?: string, rel?: string, download?: boolean }
    const footerLinks: FooterLink[] = [
        { title: "Linked In", username: "@rayanemerlin", className: styles.linkedin, link: "https://www.linkedin.com/in/rayanemerlin/", target: "_blank", rel: "noreferrer" },
        { title: "Github", username: "@rayaaaneee", className: styles.github, link: "https://github.com/rayaaaneee", target: "_blank", rel: "noreferrer" },
        { title: "Mail", className: styles.mail, link: "mailto:rayane.merlin8@gmail.com" },
        { title: "Phone", className: styles.phone, link: "tel:+33768283277" },
        { title: "Resume", className: styles.resume, link: "/Resume_Rayane_Merlin.pdf", target: "_blank", rel: "noreferrer", download: true },
    ]

    return (
        <>
            <main className={cn(
                'flex flex-col items-center justify-center w-screen h-screen',
            )}>
                <GetStarted className='absolute top-[10px] right-[110px]' />
                <div className={cn("container w-full h-full flex items-center justify-center")}>
                    <div id='presentationContainer' className={cn("flex flex-col gap-10")}>
                        <h1 className={cn(
                            "font-adobebold [line-height:0.8] text-[12vw] text-nowrap font-medium text-[rgb(251,246,233)] dark:text-[#fbe6e9] [text-shadow:0_0_2.15rem_rgba(0,0,0,.5)]",
                        )}>{ language.title }</h1>
                        <div id='main-bar' className={cn(
                            "w-[70%] h-3 rounded-[10px] bg-blanchedalmond dark:bg-[#f1e8ef] animate-bar",
                        )}></div>
                        <div id='subtitle' className={cn(
                            "flex flex-row items-center justify-start gap-[1vw]"
                        )}>
                            <h2 className={cn(
                                'text-white [line-height:1] [text-shadow:0_0_2.15rem_rgba(0,0,0,.5)] font-adobe font-semibold text-[6vw]',
                            )}>{ textTypeWriter }</h2>{/*  Texte dynamique  */}
                            {/* <h2 className={cn('two')}>{ shortedTextTypeWriter }</h2> */}{/*  Texte dynamique  */}
                            <div id='vertical-bar' className={cn(
                                "animate-vertical-bar transition-opacity duration-300",
                                "w-2 h-[6vw] bg-black rounded-full animate-pulse duration-100 ease-in-out",
                            )}></div>
                        </div>
                    </div>
                    {/* <Link href={'/null'} className={cn("get-start two")}>{ language.home.discover }</Link> */}
                </div>
                <article id='footer' className={cn('absolute bottom-0 left-0 w-full h-fit')}>
                    <ul className={cn("w-full flex flex-row items-center justify-center gap-[8vw] list-none mb-4")}>
                        { footerLinks.map((link: FooterLink, index: number) => (
                            <Tooltip 
                                size={TooltipSize.lg} 
                                position={TooltipPosition.TOP} 
                                key={index} 
                                text={link.username || link.title}>
                                <li>
                                    <Link 
                                        className={cn(
                                            link.className,
                                            "w-22 h-22 rounded-full block bg-cover bg-center transition-all duration-200",
                                        )} 
                                        href={link.link} 
                                        target={link.target} 
                                        rel={link.rel}
                                        download={link.download}>    
                                    </Link>
                                </li>
                            </Tooltip>
                        ))}
                    </ul>
                </article>
            </main>
        </>
    );
}

export default Home;