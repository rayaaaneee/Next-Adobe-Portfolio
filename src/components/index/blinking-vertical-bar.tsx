import { cn } from '@/lib/utils'

const BlinkingVerticalBar = () => {
    return (
        <div id='vertical-bar' className={cn(
            "animate-vertical-bar transition-opacity duration-300",
            "w-2 h-[6vw] bg-black rounded-full animate-pulse duration-100 ease-in-out",
        )}></div>
    )
}

export default BlinkingVerticalBar
