"use client"; // Temporary

import useTryingContext from '@/utils/hook/use-try-context';
import { useTypewriter } from 'react-simple-typewriter';

import languageContext from '@/utils/context/language-context';

import GetStarted from '@/components/home/get-started';

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
                'flex items-center justify-center w-screen h-screen',
            )}>
                <GetStarted className='absolute top-[10px] right-[110px]' />
                <div className={cn("container flex items-center justify-center")}>
                    <div className={cn("title")}>
                        <h1 className={cn(
                            "font-adobebold text-[12vw] text-nowrap font-medium text-[rgb(251,246,233)] [text-shadow:0_0_2.15rem_rgba(0,0,0,.5)]",
                        )}>{ language.title }</h1>
                        <div id='main-bar' className={cn(
                            "w-[70%] h-3 rounded-[10px] bg-blanchedalmond animate-bar",
                        )}></div>
                        <div id='subtitle' className={cn(
                            "flex flex-row items-center justify-start gap-[1vw]"
                        )}>
                            <h2 className={cn(
                                'text-white [text-shadow:0_0_2.15rem_rgba(0,0,0,.5)] font-adobe font-semibold text-[6vw]',
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