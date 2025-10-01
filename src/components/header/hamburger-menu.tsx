import { cn } from "@/lib/utils";

import { forwardRef, useState } from "react";

export interface HamburgerMenuProps {
    menuElement: HTMLElement | null;
    className?: string | null;
    onCheck?: (checked: boolean) => void;
    style?: React.CSSProperties;
}

// menuElement : tableau des éléments du menu à faire apparaître/disparaître (pas un seul élément)
const HamburgerMenu = forwardRef<HTMLDivElement, HamburgerMenuProps>(({className = null, menuElement, onCheck = () => {}, style = {}}, ref) => {

    if (!menuElement) throw new Error("You must provide a valid menu element to the HamburgerMenu component.");

    const toggleMenuClass = () => {
        menuElement.classList.toggle("active");
        toggleChecked();
    };

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
        onCheck(!checked);
    };
    
    return (
        <div ref={ref}
            className={cn(
                'hamburger-container',
                'fixed flex flex-col justify-center items-center cursor-pointer h-[60px] w-[60px] gap-[calc(2*9%)]',
                'top-[10px] right-[10px] z-[2]',
                className
            )}
            style={{ ...style }}
            onClick={toggleMenuClass}>
            <input className="hidden peer" type="checkbox" id="hamburger-checkbox" checked={checked} readOnly/>
            { ["top-bar", "middle-bar", "bottom-bar"].map((barClass, index) => (
                <div key={index} className={cn(
                    "hamburger-bar shadow-hamburger",
                    "rounded-[10px] w-[83%] h-[9%] bg-white",
                    " transition-all duration-300 ease-in-out",
                    barClass,
                    (barClass === "top-bar") && 'peer-checked:relative peer-checked:bottom-auto peer-checked:-rotate-45 top-[15px]',
                    (barClass === "middle-bar") && 'peer-checked:w-full peer-checked:opacity-0',
                    (barClass === "bottom-bar") && 'peer-checked:relative peer-checked:top-auto peer-checked:rotate-45 bottom-[15px]',
                )}></div>
            )) }
        </div>
    );
});

HamburgerMenu.displayName = "HamburgerMenu";

export default HamburgerMenu;

