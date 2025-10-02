import { cn } from "@/lib/utils";

const Background = () => {

    const shapesClassName: string = "pointer-events-none";
    const triangleClassName: string = `absolute h-0 w-0 -z-[1] ${shapesClassName}`;
    const circleClassName: string = `absolute rounded-full -z-[2] ${shapesClassName}`;
    const borderTriangleClassName: string = `${triangleClassName} blur-[10px] z-0`;

    return (
        <div className={cn(
            "background-container -z-[1]",
            "fixed top-0 left-0 w-full h-full bg-white dark:bg-background-dark",
            "[&>*]:transition-colors [&>*]:duration-theme [&>*]:ease-theme",
        )}>
            <div className={cn(
                borderTriangleClassName,
                "-top-[1vw] left-0 border-l-[100vw] border-r-0 border-t-[12vw]",
                "border-l-transparent border-r-transparent border-t-triangle-header",
                "dark:border-t-triangle-header-dark"
            )}></div>
            <div className={cn(
                triangleClassName,
                "animate-triangle-red",
                "left-[5vw] top-[5vw]",
                "border-r-[10vw] border-l-[10vw] border-b-[16vw]",
                "border-l-transparent border-r-transparent border-b-triangle-red",
                "dark:border-b-triangle-red-dark"
            )}></div>
            <div className={cn(
                triangleClassName,
                "animate-triangle-orange",
                "left-[15vw] bottom-[10vw]",
                "border-l-[20vw] border-r-[20vw] border-b-[27vw]",
                "border-l-transparent border-r-transparent border-b-triangle-orange",
                "dark:border-b-triangle-orange-dark"
            )}></div>
            <div className={cn(
                triangleClassName,
                "animate-triangle-yellow",
                "right-[5vw] top-[5vw]",
                "border-l-[16vw] border-r-[16vw] border-b-[23vw]",
                "border-l-transparent border-r-transparent border-b-triangle-yellow",
                "dark:border-b-triangle-yellow-dark"
            )}></div>
            <div className={cn(
                circleClassName,
                "one",
                "w-full h-[100vw] top-[35%] -right-[70%]",
                "bg-circle-one dark:bg-circle-one-dark"
            )}></div>
            <div className={cn(
                circleClassName,
                "two",
                "w-[80vw] h-[80vw] -top-[60%] -left-[40%]",
                "bg-circle-two dark:bg-circle-two-dark"
            )}></div>
            <div className={cn(
                borderTriangleClassName,
                "left-0 -bottom-[1vw] border-l-[100vw] border-r-0 border-b-[21vw]",
                "border-l-transparent border-r-transparent border-b-triangle-footer",
                "dark:border-b-triangle-footer-dark"
            )}></div>
        </div>
    )
}

export default Background;