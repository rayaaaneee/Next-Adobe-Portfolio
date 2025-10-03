import { cn } from "@/lib/utils"
import ChildrenInterface from "@/utils/interface/children-interface";

interface h1Props extends ChildrenInterface {
    className?: string;
}

export const HeadingOne = ({ className, children }: h1Props) => (
    <h1 className={cn("text-4xl font-poppins font-light", className)}>
        {children}
    </h1>
);