"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { type IconType } from "react-icons/lib";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


import cn from "@/util/function/cn";

import useConditionalEffect from "@/util/hook/use-conditional-effect";
import useImageFlowContext from "@/util/hook/use-image-flow-context";

const CarouselImage = () => {

    const { clearImages, clicked, setImage, image, nextImage, previousImage } = useImageFlowContext();

    const location = usePathname();

    const [closing, setClosing] = useState(false);

    type SwitchingType = "left" | "right";
    const [switching, setSwitching] = useState<SwitchingType | null>(null);

    useConditionalEffect(() => clearImages(), [location]);

    // Duration in milliseconds linked to the scale-up animation in tailwind.config.ts
    const globalAnimationDuration = 300;

    const delaySetImage = (value: typeof image) => {
        setTimeout(() => {
            setImage(value);
            setClosing(false);
        }, globalAnimationDuration);
    }

    const goNextImage = (switching: SwitchingType) => {
        if ((switching === "right" && !nextImage) || (switching === "left" && !previousImage)) return;
        setImage(switching === "right" ? nextImage : previousImage);
        setSwitching(switching);
        setTimeout(() => setSwitching(null), globalAnimationDuration);
    }

    const close = () => {
        setClosing(true);
        delaySetImage(null);
    }

    useEffect(() => {

        const keydownHandler = (event: KeyboardEvent) => {  
            if (event.key === "Escape") {
                close();
            } else if (event.key.includes("Arrow")) {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") goNextImage("right");
                else if (event.key === "ArrowLeft" || event.key === "ArrowUp") goNextImage("left");
            }
        };

        window.addEventListener("keydown", keydownHandler);

        return () => {
            window.removeEventListener("keydown", keydownHandler);
        };

    });

    useConditionalEffect(() => {
        clicked && (document.documentElement.classList.add("no-overflow"));
        closing && (document.documentElement.classList.remove("no-overflow"));
    }, [clicked, closing]);

    const zoomImg = () => {
        // Start zoom-in the image (not closing)
    }

    const SwitchButton = (direction: SwitchingType) => {
        const Icon: IconType = direction === "left" ? IoIosArrowBack : IoIosArrowForward;
        return (
            <button className={cn(
                "absolute focus:outline-none top-1/2 -translate-y-1/2 text-white text-5xl",
                (direction === "left" ? "left-4" : "right-4"),
                "disabled:opacity-30",
                ((direction === "left" ? previousImage : nextImage && !closing ) ? "animate-scale-up" : "animate-scale-down pointer-events-none"),
            )}>
                <Icon
                    onClick={() => goNextImage(direction)}
                />
            </button>
        );
    }

    return (
        <article className={cn(
            "fixed inset-0 w-full h-full transition-colors duration-300 flex justify-center items-center overflow-hidden",
            {
                "-z-10": !clicked,
                "bg-black/90 z-[100]": clicked,
                "bg-transparent": !clicked || closing,   
            }
        )}>
            <button className={cn(
                "absolute top-5 right-5 text-gray-300 text-5xl",
                ((clicked && !closing) ? "animate-scale-up" : "animate-scale-down pointer-events-none")
            )}>
                <IoCloseOutline
                    onClick={() => close()}
                />
            </button>
            { SwitchButton("left") }
            <div
                id={`image-frame`}
                className={cn(
                    "absolute top-[5%] bottom-[5%] left-[5%] right-[5%] overflow-hidden",
                    "transition-transform duration-300",
                    [
                        "opacity-1",
                        (switching === "left") && "animate-appear-left",
                        (switching === "right") && "animate-appear-right",
                    ],
                )}
            >   
                { image && (                   
                    <Image
                        alt={"current-image-carousel"}
                        fill
                        layout="fill"
                        objectFit="contain"
                        src={image}
                        onClick={zoomImg}
                        className={cn(
                            "transition-transform",
                            {
                                "animate-scale-up": clicked && !closing,
                                "animate-scale-down": closing,
                            },
                        )}
                    />
                )}
            </div>
            { SwitchButton("right") }
        </article>
    );
}

export default CarouselImage;
