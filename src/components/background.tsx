import { cn } from "@/lib/utils";

const Background = () => {

    const triangleClassName: string = "absolute h-0 w-0 -z-[1]";
    const circleClassName: string = "absolute rounded-full -z-[2]";
    const borderTriangleClassName: string = `${triangleClassName} left-0 z-0`;

    return (
        <div className={cn(
            "background-container -z-[1]",
            "fixed top-0 left-0 w-full h-full bg-white dark:bg-background-dark",
            "[&>*]:pointer-events-none",
        )}>
            <div id="headerTriangle" className={cn(
                borderTriangleClassName,
                "border-l-[100vw] border-t-[25vh]",
                "top-0 border-l-transparent border-r-transparent border-t-triangle-header border-r-0",
                "xs:border-t-[30vw]",
                "sm:border-t-[17vw]",
                "lg:border-t-[12vw]",
                "dark:border-t-triangle-header-dark"
            )}></div>
            <div id="redTriangle" className={cn(
                triangleClassName,
                "animate-triangle-red",
                "border-l-[200px] border-r-[200px] border-b-[300px] top-[55vh]",
                "sm:left-[5vw] sm:top-[5vw] sm:border-l-[220px] sm:border-r-[180px] sm:border-b-[330px]",
                "lg:border-l-[18vw] lg:border-r-[22vw] lg:border-b-[35vw]",
                "xl:border-r-[10vw] xl:border-l-[10vw] xl:border-b-[16vw]",
                "border-l-transparent border-r-transparent border-b-triangle-red",
                "dark:border-b-triangle-red-dark"
            )}></div>
            <div id="orangeTriangle" className={cn(
                triangleClassName,
                "animate-triangle-orange",
                "border-l-[150px] border-r-[150px] border-b-[235px] top-[20vh] left-[40vw]",
                "sm:left-[15vw] sm:top-[55vh] sm:border-l-[20vw] sm:border-r-[20vw] sm:border-b-[35vw]",
                "lg:border-l-[25vw] lg:border-r-[25vw] lg:top-[20vh] lg:border-b-[40vw]",
                "xl:border-l-[20vw] xl:border-r-[20vw] xl:border-b-[27vw]",
                "border-l-transparent border-r-transparent border-b-triangle-orange",
                "dark:border-b-triangle-orange-dark"
            )}></div>
            <div id="yellowTriangle" className={cn(
                triangleClassName,
                "animate-triangle-yellow",
                "border-l-[90px] border-r-[90px] border-b-[135px]",
                "sm:right-[5vw] sm:top-[5vw] sm:border-l-[100px] sm:border-r-[100px] sm:border-b-[160px]",
                "lg:border-l-[16vw] lg:border-r-[16vw] lg:border-b-[23vw]",
                "border-l-transparent border-r-transparent border-b-triangle-yellow",
                "dark:border-b-triangle-yellow-dark"
            )}></div>
            <div id="circleOne" className={cn(
                circleClassName,
                "top-[-27%] left-[-50%] w-[550px] h-[550px]",
                "xs:top-[-20%] xs:left-[-20%]",
                "md:w-[80vw] md:h-[80vw]",
                "lg:-top-[50%] lg:-left-[35%]",
                "xl:-top-[60%] xl:-left-[40%]",
                "bg-circle-two dark:bg-circle-two-dark"
            )}></div>
            <div id="circleTwo" className={cn(
                circleClassName,
                "top-[52%] right-[-50%] w-[550px] h-[550px]",
                "xs:right-[-20%]",
                "md:-right-[40%] md:w-full md:h-[100vw] md:top-[35%]",
                "xl:-right-[60%]",
                "bg-circle-one dark:bg-circle-one-dark"
            )}></div>
            <div id="footerTriangle" className={cn(
                borderTriangleClassName,
                "border-l-[100vw] border-b-[25vh]",
                "xs:border-b-[30vw]",
                "sm:border-b-[21vw]",
                "bottom-0 border-l-transparent border-r-transparent border-r-0 border-b-triangle-footer",
                "dark:border-b-triangle-footer-dark"
            )}></div>
        </div>
    )
}

export default Background;