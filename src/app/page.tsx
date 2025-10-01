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
                '[&_*]:font-poppins flex items-center justify-center w-screen h-screen',
            )}>
                <a href={'#null'} className={cn(
                    "get-start one hover:bg-[rgba(237,186,147,0.35)]",
                    "p-4 rounded-full flex items-center justify-center text-2xl font-medium text-white no-underline",
                    "absolute top-[10px] right-[110px] transition-all duration-300 border-white border-2 text-nowrap tracking-wide z-1",
                )}>{ language.home.discover }</a>
                <div className={cn("container")}>
                    <div className={cn("title")}>
                        <h1>{ language.title }</h1>
                        <div className={cn("main-bar")}></div>
                        <div className={cn("subtitle")}>
                            <h2 className={cn('one')}>{ textTypeWriter }</h2>{/*  Texte dynamique  */}
                            {/* <h2 className={cn('two')}>{ shortedTextTypeWriter }</h2> */}{/*  Texte dynamique  */}
                            <div className={cn("vertical-bar")}></div>
                        </div>
                    </div>
                    {/* <Link href={'/null'} className={cn("get-start two")}>{ language.home.discover }</Link> */}
                </div>
                {/* <article className={cn('footer')}>
                    <ul className={cn("footer-links")}>
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
                    </ul>
                </article> */}
            </main>
        </>
    );
}

export default Home;