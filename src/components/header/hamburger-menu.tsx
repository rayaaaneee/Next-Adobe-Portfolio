import { forwardRef, useState } from "react";

import { cn } from "@/lib/utils";

import ClassNameInterface from "@/utils/interface/classname";

export interface HamburgerMenuProps extends ClassNameInterface {
    menuElement: HTMLElement | null;
    onClick?: (checked: boolean) => void;
    style?: React.CSSProperties;
}

// menuElement : tableau des éléments du menu à faire apparaître/disparaître (pas un seul élément)
const HamburgerMenu = forwardRef<HTMLDivElement, HamburgerMenuProps>(({className, id, menuElement, onClick: onCheck = () => {}, style = {}}, ref) => {

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
        <div id={id} ref={ref}
            className={cn(
                'hamburger-container',
                'fixed flex flex-col justify-center items-center cursor-pointer h-[60px] w-[60px] gap-[calc(2*9%)]',
                'top-[10px] right-[10px] z-[2]',
                className,
            )}
            style={{ ...style }}
            onClick={toggleMenuClass}>

            <input className="hidden peer" type="checkbox" id="hamburger-checkbox" checked={checked} readOnly/>
            
            { ["top-bar", "middle-bar", "bottom-bar"].map((barClass, index) => (
                <div key={index} className={cn(
                    "hamburger-bar",
                    "rounded-[10px] w-[83%] h-[9%] bg-gray-700 dark:bg-white",
                    "transition-all duration-300 ease-in-out",
                    "peer-checked:bg-slate-800 dark:peer-checked:bg-slate-100",
                    barClass,
                    (barClass === "top-bar") && 'peer-checked:relative peer-checked:bottom-auto peer-checked:-rotate-45 top-[16px]',
                    (barClass === "middle-bar") && 'peer-checked:w-full peer-checked:opacity-0',
                    (barClass === "bottom-bar") && 'peer-checked:relative peer-checked:top-auto peer-checked:rotate-45 bottom-[16px]',
                )}></div>
            )) }

        </div>
    );
});

HamburgerMenu.displayName = "HamburgerMenu";

export default HamburgerMenu;

