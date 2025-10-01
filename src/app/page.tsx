"use client"; // Temporary

import Link from 'next/link';

import useTryingContext from '@/utils/hook/use-try-context';

import languageContext from '@/utils/context/language-context';

import { useTypewriter } from 'react-simple-typewriter';
import Logo, { LogoColors } from '@/components/logo';
import { cn } from '@/lib/utils';


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

    interface FooterLink { title: string, link: string, target?: string, rel?: string }
    const footerLinks: FooterLink[] = [
        { title: "Linked In", link: "https://www.linkedin.com/in/rayanemerlin/", target: "_blank", rel: "noreferrer" },
        { title: "Github", link: "https://github.com/rayaaaneee", target: "_blank", rel: "noreferrer" },
        { title: "Mail", link: "mailto:rayane.merlin8@gmail.com" },
        { title: "Phone", link: "tel:+33768283277" }
    ]

    return (
        <>
            <main className={cn(
                '[&_*]:font-poppins w-screen h-screen',
            )}>
                <div className={cn('left-top-angular')}>
                    <Logo color={LogoColors.white} className={cn("index-logo")}/>
                </div>
                <Link href={'/null'} className={cn("get-start one")}>{ language.home.discover }</Link>
                {/* <div className={cn("container")}>
                    <div className={cn("title")}>
                        <h1>{ language.title }</h1>
                        <div className={cn("main-bar")}></div>
                        <div className={cn("subtitle")}>
                            <h2 className={cn('one')}>{ textTypeWriter }</h2>{/*  Texte dynamique  */}
                            <h2 className={cn('two')}>{ shortedTextTypeWriter }</h2>{/*  Texte dynamique  /}
                            <div className={cn("vertical-bar")}></div>
                        </div>
                    </div>
                    <Link href={'/null'} className={cn("get-start two")}>{ language.home.discover }</Link>
                </div> */}
            </main>
            <article className={cn('footer')}>
                {/* <ul className={cn("footer-links")}>
                    { footerLinks.map((footerLink: FooterLink, index: number) => (
                        <li key={index} title={footerLink.title}>
                            <a 
                                className={`${footerLink.title.toLowerCase().replace(' ', '')}-link`} 
                                href={footerLink.link} 
                                target={footerLink.target} 
                                rel={footerLink.rel}>    
                            </a>
                        </li>
                    ))}
                </ul> */}
            </article>
        </>
    );
}

export default Home;