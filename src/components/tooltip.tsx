import { JSX, MouseEventHandler } from "react";

import cn from "@/util/function/cn";

import { FaCircleCheck } from "react-icons/fa6";
import { MdInfo } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { TiWarning } from "react-icons/ti";

import ChildrenInterface, { type ChildrenType } from "@/util/interface/children";
import ClassNameInterface from "@/util/interface/classname";
import { Nullish } from "@/util/type/nullable";


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

interface BaseTooltipPropsInterface extends ChildrenInterface, ClassNameInterface {
    id?: string;
    size?: TooltipSize;
    position?: TooltipPosition;
    forceShow?: boolean;
    tooltipClassName?: string;
    tooltipBackgroundColor?: string;
    type?: TooltipType;
    hasIcon?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

interface DisabledTooltipProps {
    disabled: true;
    text?: Nullish<ChildrenType>;
}

interface EnabledTooltipProps {
    disabled?: false;
    text: ChildrenType;
}

type TooltipProps = (DisabledTooltipProps | EnabledTooltipProps) & BaseTooltipPropsInterface;


const Tooltip = ({ 
    children, 
    text,
    id,
    size = TooltipSize.sm,
    position = TooltipPosition.top, 
    forceShow = false, 
    disabled = false, 
    onClick,
    onMouseLeave,
    className, 
    tooltipClassName, 
    tooltipBackgroundColor,
    type = "default", 
    hasIcon = false,
}: TooltipProps) => {

    const getSizeClassName = (): string => {
        let className: string = '';
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
        let className: string = '';
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
        let className: string = `bg-[#3a3b3d]`;
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
        <div id={id} className={cn('tooltip-container relative group w-fit text-white', className)} onClick={onClick} onMouseLeave={onMouseLeave}>
            {children}
            <div 
                role="tooltip"
                style={{ backgroundColor: tooltipBackgroundColor }}
                className={cn(
                    getPositionClassName(), 
                    "absolute z-10 flex-row items-center justify-center gap-2 whitespace-nowrap font-medium rounded-lg shadow-sm tooltip pointer-events-none",
                    { [getTooltipTypeClassName()]: !tooltipBackgroundColor },
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