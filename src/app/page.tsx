import { cn } from '@/lib/utils';

import GetStarted from '@/components/index/get-started';
import ContactLinks from '@/components/contact-links';
import MainContainer from '@/components/index/main-container';

import { IconSize } from '@/components/contact-icon';

const Index = () => {
    return (
        <main className={cn(
            'flex flex-col items-center justify-center w-screen h-screen !overflow-hidden',
        )}>
            <GetStarted id='one' className='hidden md:block to-animate appear -translate-y-3 anim-delay-600 absolute top-[10px] right-[110px]' />
            <MainContainer />
            <ContactLinks tooltips size={IconSize.md} id='footer' animate className='absolute bottom-0 left-0 w-full h-fit justify-center gap-4 xs:gap-[8vw]'/>
        </main>
    );
}

export default Index;