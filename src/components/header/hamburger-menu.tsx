import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

export interface HamburgerMenuProps {
    menuElement: HTMLElement;
    className?: string | null;
    onCheck?: (checked: boolean) => void;
    style?: React.CSSProperties;
}

// menuElement : tableau des éléments du menu à faire apparaître/disparaître (pas un seul élément)
const HamburgerMenu = forwardRef<HTMLDivElement, HamburgerMenuProps>(({className = null, menuElement, onCheck = () => {}, style = {}}, ref) => {

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
                'relative flex flex-col justify-center items-center cursor-pointer',
                className,
                'group'
            )}
            style={{ ...style }}
            onClick={toggleMenuClass}>
            <input type="checkbox" id="hamburger-checkbox" checked={checked} />
            { ["top-bar", "middle-bar", "bottom-bar"].map((barClass, index) => (
                <div key={index} className={cn(
                    "hamburger-bar",
                    "rounded-[10px]",
                    barClass,
                    (barClass === "top-bar") && 'top-[10px]',
                    (barClass === "bottom-bar") && 'bottom-[10px]',
                )}></div>
            )) }
        </div>
    );
});

HamburgerMenu.displayName = "HamburgerMenu";

export default HamburgerMenu;

