import { ComponentProps, forwardRef } from "react";

import { Button } from "@/components/page-flow";

import { cn } from "@/lib/utils";

const AdaptableGridTopBottomPart = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
    ({ className, hover = false, id, onClick, children }, ref) => (
        <Button
            id={id}
            ref={ref}
            hover={hover}
            onClick={onClick}
            className={cn("w-full h-16 rounded-none", className)}
        >
            {children}
        </Button>
    )
)
AdaptableGridTopBottomPart.displayName = "AdaptableGridTopBottomPart"

export default AdaptableGridTopBottomPart