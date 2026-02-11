import { ComponentProps, forwardRef } from "react";

import { Button } from "@/components/page-flow/page-flow";

import cn from "@/util/function/cn";

const AdaptiveGridTopBottomPart = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
    ({ className, hover = false, id, onClick, children }, ref) => (
        <Button
            id={id}
            ref={ref}
            hover={hover}
            onClick={onClick}
            className={cn(
                "w-full rounded-none", 
                [
                    "h-8",
                    "xs:h-10",
                    "sm:h-12",
                    "lg:h-14",
                    "xl:h-16",
                ],
                className
            )}
        >
            {children}
        </Button>
    )
)
AdaptiveGridTopBottomPart.displayName = "AdaptiveGridTopBottomPart"

export default AdaptiveGridTopBottomPart;