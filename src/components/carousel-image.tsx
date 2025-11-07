"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import Image, { StaticImageData } from "next/image";

import cn from "@/utils/function/cn";

import useConditionalEffect from "@/utils/hook/use-conditional-effect";
import useFlowImageContext from "@/utils/hook/use-flow-image-context";


const CarouselImage = () => {

    const { images, clearImages, clicked, setImageClicked, imageClicked, loadNextImage, loadPreviousImage } = useFlowImageContext();

    const location = usePathname();

    const [closing, setClosing] = useState(false);

    const [switchingCounter, setSwitchingCounter] = useState(0);

    const [switching, setSwitching] = useState<"left" | "right" | null>(null);

    const currentIndexImage = useMemo(
        () => images.findIndex((el) => imageClicked === el),
        [images, imageClicked]
    );

    useConditionalEffect(() => clearImages(), [location]);

    // Duration in milliseconds linked to the scale-up animation in tailwind.config.ts
    const globalAnimationDuration = 300;

    const delaySetImageClicked = (value: typeof imageClicked) => {
        setTimeout(() => {
            setImageClicked(value);
            setClosing(false);
        }, globalAnimationDuration);
    }

    useEffect(() => {

        const keydownHandler = (event: KeyboardEvent) => {  
            if (event.key === "Escape") {
                setClosing(true);
                delaySetImageClicked(null);
            } else if (event.key.includes("Arrow")) {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    loadNextImage();
                    setSwitching("right")
                } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    loadPreviousImage();
                    setSwitching("left")
                }
                setTimeout(() => (setSwitchingCounter(i => i+1), setSwitching(null)), globalAnimationDuration);
            }
        };

        window.addEventListener("keydown", keydownHandler);

        return () => {
            window.removeEventListener("keydown", keydownHandler);
            setSwitchingCounter(0);
        };

    });

    useConditionalEffect(() => {
        clicked && document.documentElement.classList.add("no-overflow");
    }, [clicked]);

    useConditionalEffect(() => {
        closing && document.documentElement.classList.remove("no-overflow");
    }, [closing]);

    const zoomImg = () => {
        // Start zoom-in the image (not closing)
    }

    const previousImage: StaticImageData = useMemo(() => {
        const previousIndex = currentIndexImage - 1;
        return images[previousIndex < 0 ? images.length - 1 : previousIndex];
    }, [switchingCounter, clicked]);

    const nextImage: StaticImageData = useMemo(() => {
        const nextIndex = currentIndexImage + 1;
        return images[nextIndex >= images.length ? 0 : nextIndex];
    }, [switchingCounter, clicked]);

    return (
        <article className={cn(
            "fixed inset-0 w-full h-full transition-colors duration-300 flex justify-center items-center overflow-hidden",
            {
                "-z-10": !clicked,
                "bg-black/90 z-[100]": clicked,
                "bg-transparent": !clicked || closing,   
            }
        )}>
            { ["current", "next"].map((className, i) => (
                <div
                    key={className}
                    id={`${className}-frame`}
                    className={cn(
                        "absolute top-[5%] bottom-[5%] left-[5%] right-[5%] overflow-hidden",
                        "transition-transform duration-300",
                        (i === 0) /* is current */ && [
                            "opacity-1",
                            (switching === "left") && "animate-disappear-right",
                            (switching === "right") && "animate-disappear-left",
                        ],
                        (i === 1) /* is next */ && [
                            "opacity-0",
                            (switching === "right") && "animate-appear-right",
                        ]
                    )}
                >
                    <Image
                        alt={className}
                        fill
                        layout="fill"
                        objectFit="contain"
                        src={(i === 0) /* is current */ ? (imageClicked || "") : (i === 1) /* is next */ ? nextImage : previousImage}
                        onClick={zoomImg}
                        className={cn(
                            "cursor-zoom-in transition-transform",
                            {
                                "animate-scale-up": clicked && !closing,
                                "animate-scale-down": closing,
                            },
                        )}
                    />
                </div>
            ))}
        </article>
    );
}

export default CarouselImage;
