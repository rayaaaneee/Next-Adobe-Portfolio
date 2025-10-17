import { cn } from "@/lib/utils";

import Blog from "./blog";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    return (
        <div 
        id="blog-modal"
        className={cn(
            "absolute inset-0 w-full h-full overflow-hidden z-20",
            "flex justify-center items-start", 
            "to-animate fade anim-duration-300",
        )}>
            <Blog id={id} />
        </div>
    );
}

export default Page;
