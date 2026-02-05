import cn from "@/util/function/cn";

import Skeleton, { SkeletonText } from "./skeleton";

const SeparatorSkeleton = () => (
    <div className="w-4/5 mx-auto h-1 rounded-full bg-gray-200 dark:bg-gray-700 opacity-35" />
);

const PortfolioSkeleton = () => (
    <>
        {/* Background placeholder — matches the real fixed background */}
        <div className="fixed top-0 left-0 w-full h-full -z-[1] bg-white dark:bg-background-dark" />

        {/* Logo placeholder (fixed top-left like the real Logo) */}
        <div className="fixed top-4 left-4 z-[1]">
            <Skeleton variant="circular" width={70} height={70} />
        </div>

        {/* Hamburger menu placeholder (fixed top-right like the real HamburgerMenu) */}
        <div className={cn(
            "fixed top-0 right-0 z-[2]",
            "w-[60px] h-[60px] translate-x-[17%] translate-y-[-20%]",
            "flex items-center justify-center",
        )}>
            <Skeleton variant="circular" width={60} height={60} />
        </div>

        {/* Main content skeleton — matches MainPart container styles */}
        <main className={cn(
            "relative justify-self-center rounded-none md:rounded-md h-fit mx-auto",
            "bg-white/70 dark:bg-black/80",
            "box-border overflow-hidden",
            "w-[100vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw]",
            "my-0 md:my-[5vw] lg:my-10",
        )}>
            {/* VerticalBorderSection skeleton */}
            <div className={cn(
                "flex justify-center items-center w-full",
                "h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20",
                "mx-5 sm:mx-7 md:mx-10 xl:mx-20",
            )}>
                <Skeleton height={22} width="110px" />
            </div>

            <SeparatorSkeleton />

            {/* Header: Name + Role + Location + Photo */}
            <article className="relative flex flex-col justify-center mx-5 sm:mx-7 md:mx-10 xl:mx-20 mt-2">
                <div className="grid grid-cols-[1fr_auto]">
                    <div className="space-y-4">
                        {/* Name — HeadingOne */}
                        <Skeleton height={38} width="55%" />
                        {/* Role — Paragraph */}
                        <Skeleton variant="text" height={18} width="40%" />
                        {/* Location — HeadingThree */}
                        <Skeleton variant="text" height={16} width="28%" />
                    </div>
                    {/* Photo (small, visible on xs only) */}
                    <Skeleton
                        variant="circular"
                        className={cn(
                            "block m-auto",
                            "w-24 h-24 xs:w-32 xs:h-32 sm:hidden",
                        )}
                    />
                </div>
                {/* Photo (large, visible sm+) */}
                <Skeleton
                    variant="circular"
                    className={cn(
                        "hidden absolute right-0",
                        "sm:block sm:w-40 sm:h-40",
                        "lg:w-44 lg:h-44",
                        "xl:w-48 xl:h-48",
                    )}
                />
            </article>

            {/* Links — HeaderLinks */}
            <section className="mx-5 sm:mx-7 md:mx-10 xl:mx-20 mt-4">
                <Skeleton variant="text" height={16} width="15%" className="mb-3" />
                <div className="flex gap-4 sm:gap-5 md:gap-6">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} variant="circular" width={34} height={34} />
                    ))}
                </div>
            </section>

            <div className="my-4 xl:my-8"><SeparatorSkeleton /></div>

            {/* About Me section */}
            <article className="mx-5 sm:mx-7 md:mx-10 xl:mx-20">
                <Skeleton height={30} width="28%" className="mb-4" />
                <SkeletonText lines={4} />
            </article>

            <div className="my-4 xl:my-8"><SeparatorSkeleton /></div>

            {/* Projects section */}
            <article className="mx-5 sm:mx-7 md:mx-10 xl:mx-20">
                <Skeleton height={30} width="22%" className="mb-3" />
                <Skeleton variant="text" height={14} width="65%" className="mb-5" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} height={80} className="rounded-lg" />
                    ))}
                </div>
            </article>

            <div className="my-4 xl:my-8"><SeparatorSkeleton /></div>

            {/* Work Experience section */}
            <article className="mx-5 sm:mx-7 md:mx-10 xl:mx-20">
                <Skeleton height={30} width="35%" className="mb-4" />
                <div className="space-y-5">
                    {[1, 2].map((i) => (
                        <div key={i} className="space-y-3 p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/20">
                            <div className="flex justify-between items-center">
                                <Skeleton height={20} width="40%" />
                                <Skeleton height={14} width="12%" />
                            </div>
                            <Skeleton variant="text" height={14} width="30%" />
                            <SkeletonText lines={3} />
                        </div>
                    ))}
                </div>
            </article>

            <div className="my-4 xl:my-8"><SeparatorSkeleton /></div>

            {/* Education section */}
            <article className="mx-5 sm:mx-7 md:mx-10 xl:mx-20">
                <Skeleton height={30} width="30%" className="mb-4" />
                <div className="space-y-3 p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/20">
                    <div className="flex justify-between items-center">
                        <Skeleton height={20} width="45%" />
                        <Skeleton height={14} width="14%" />
                    </div>
                    <Skeleton variant="text" height={14} width="35%" />
                    <SkeletonText lines={2} />
                </div>
            </article>

            <div className="my-4 xl:my-8"><SeparatorSkeleton /></div>

            {/* Skills section */}
            <article className="mx-5 sm:mx-7 md:mx-10 xl:mx-20">
                <Skeleton height={30} width="18%" className="mb-4" />
                {/* Skill tabs */}
                <div className="flex gap-2 mb-5">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} height={36} width={95} className="rounded-lg" />
                    ))}
                </div>
                {/* Skill grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {[...Array(10)].map((_, i) => (
                        <Skeleton key={i} height={70} className="rounded-lg" />
                    ))}
                </div>
            </article>

            <div className="my-4 xl:my-8"><SeparatorSkeleton /></div>

            {/* Hobbies section */}
            <article className="mx-5 sm:mx-7 md:mx-10 xl:mx-20">
                <Skeleton height={30} width="20%" className="mb-4" />
            </article>
            <div className="mx-5 sm:mx-7 md:mx-10 xl:mx-20 mb-6">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} height={80} className="rounded-lg" />
                    ))}
                </div>
            </div>

            <SeparatorSkeleton />

            {/* Bottom border section */}
            <div className={cn(
                "flex justify-center items-center w-full",
                "h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20",
            )}>
                <Skeleton height={22} width="110px" />
            </div>
        </main>
    </>
);

export default PortfolioSkeleton;
