import { JSX } from "react";

import { FaCircleCheck } from "react-icons/fa6";
import { MdInfo } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { TiWarning } from "react-icons/ti";

import cn from "@/utils/function/cn";

import { ChildrenInterface, type ChildrenType } from "@/utils/interface/children";
import ClassNameInterface from "@/utils/interface/classname";


export enum TooltipPosition {
    top = 'top',
    bottom = 'bottom',
    left = 'left',
    right = 'right',
}

export enum TooltipSize {
    sm = 'small',
    md = 'medium',
    lg = 'large',
}

export type TooltipType = 'default' | "default-2" | 'success' | 'warning' | 'error';

export interface TooltipInterface extends ChildrenInterface, ClassNameInterface {
    text: ChildrenType;
    size?: TooltipSize;
    position?: TooltipPosition;
    forceShow?: boolean;
    disabled?: boolean;
    tooltipClassName?: string;
    type?: TooltipType;
    hasIcon?: boolean;
}

const Tooltip = ({ 
    children, 
    text, 
    size = TooltipSize.sm,
    position = TooltipPosition.top, 
    forceShow = false, 
    disabled = false, 
    className, 
    tooltipClassName, 
    type = "default", 
    hasIcon = false 
}: TooltipInterface) => {

    const getSizeClassName = (): string => {
        let className = '';
        switch (size) {
            case TooltipSize.sm:
                className = 'text-xs px-2 py-1';
                break;
            case TooltipSize.md:
                className = 'text-sm px-3 py-2';
                break;
            case TooltipSize.lg:
                className = 'text-xl px-4 py-3';
                break;
        }
        return className;
    }

    const getPositionClassName = (): string => {
        let className = '';
        switch (position) {
            case 'top':
                className = 'top-[-4px] left-1/2 transform -translate-x-1/2 -translate-y-full';
                break;
            case 'bottom':
                className = 'bottom-[-4px] left-1/2 transform -translate-x-1/2 translate-y-full';
                break;
            case 'left':
                className = 'left-[-4px] top-1/2 transform -translate-x-full -translate-y-1/2';
                break;
            case 'right':
                className = 'right-[-4px] top-1/2 transform translate-x-full -translate-y-1/2';
                break;
        }
        return className;
    }

    const getTooltipTypeClassName = (): string => {
        let className = 'bg-[#3a3b3d]';
        switch (type) {
            case 'success':
                className = 'bg-green-500';
                break;
            case 'warning':
                className = 'bg-yellow-500';
                break;
            case 'error':
                className = 'bg-red-500';
                break;
        }
        return className;
    }

    const getTooltipIcon = (): JSX.Element => {
        let icon: JSX.Element = <MdInfo />;
        switch (type) {
            case 'success':
                icon = <FaCircleCheck />;
                break;
            case 'warning':
                icon = <TiWarning />;
                break;
            case 'error':
                icon = <RiErrorWarningFill />;
                break;
        }
        return icon;
    }

    return (
        <div className={cn('relative group w-fit', className)}>
            {children}
            <div role="tooltip" className={cn(
                "absolute z-10 flex-row items-center justify-center gap-2 whitespace-nowrap font-medium text-white rounded-lg shadow-sm tooltip pointer-events-none",
                getPositionClassName(), 
                getTooltipTypeClassName(), 
                getSizeClassName(),
                (forceShow && !disabled) ? "flex" : "hidden", 
                { "group-hover:flex": !disabled && text },
                tooltipClassName
            )}>
                {hasIcon && getTooltipIcon()}
                {text}
            </div>
        </div>
    )
}

Tooltip.displayName = "Tooltip";

export default Tooltip;