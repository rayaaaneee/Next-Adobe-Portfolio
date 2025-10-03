import { cn } from '@/lib/utils';

import GetStarted from '@/components/home/get-started';
import ContactLinks from '@/components/contact-links';
import MainContainer from '@/components/home/main-container';

const Home = () => {
    return (
        <>
            <main className={cn(
                'flex flex-col items-center justify-center w-screen h-screen',
            )}>
                <GetStarted className='to-animate appear -translate-y-3 anim-delay-600 absolute top-[10px] right-[110px]' />
                <MainContainer />
                <ContactLinks id='footer' animate className='absolute bottom-0 left-0 w-full h-fit'/>
            </main>
        </>
    );
}

export default Home;