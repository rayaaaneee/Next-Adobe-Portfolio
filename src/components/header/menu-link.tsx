import ChildrenType from '@/utils/types/children-type';

import Link from "next/link";

export interface MenuLinkProps {
    className?: string | null,
    to: string,
    children?: ChildrenType,
    isColored: boolean
}

const MenuLink = ({ className = null, to, children = <></>, isColored }: MenuLinkProps) => {
    return (
        <li className="menu-link">
            <Link href={ to } className={ `${className} ${isColored ? 'colored' : ''}` }>{ children }</Link>
        </li>
    )
}

export default MenuLink;
