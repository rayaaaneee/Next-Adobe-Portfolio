import cn from "@/util/function/cn";

const BlinkingVerticalBar = () => {
    return (
        <div id='vertical-bar' className={cn(
            "animate-vertical-bar transition-opacity duration-300",
            "bg-black dark:bg-white rounded-full animate-pulse duration-100 ease-in-out",
            ["w-[5px] xs:w-2"],
            ["h-[14vw] sm:h-[9vw] md:h-[8vw] lg:h-[7vw] xl:h-[6vw]"],
        )}></div>
    )
}

export default BlinkingVerticalBar
