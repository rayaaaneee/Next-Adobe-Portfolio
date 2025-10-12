import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptableGridElementData } from '@/components/home/adaptable-grid/adaptable-grid';

import { baseIconProps } from './base';

import { BsMusicNote } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";

const hobbies: DeepReadonly<AdaptableGridElementData[]> = [
    {
        name: "Music",
        color: "#00B8A9",
        icon: <BsMusicNote {...baseIconProps} />,
    },
    {
        name: "Gym",
        color: "#E63946",
        icon: <IoIosFitness {...baseIconProps} />,
    },
    {
        name: "Cybersecurity",
        color: "#0E7490",
        icon: <MdOutlineSecurity {...baseIconProps} />,
    },
    {
        name: "Design",
        color: "#F59E0B",
        icon: <MdDesignServices {...baseIconProps} />,
    }
] as const;

export type Hobbies = DeepReadonly<typeof hobbies>;

export default hobbies as Hobbies;