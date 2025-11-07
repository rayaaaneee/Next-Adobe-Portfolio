import type DeepReadonly from '@/utils/type/deep-readonly';

import Language from '@/utils/type/language';

import type { AdaptiveGridElementData } from '@/components/others/adaptive-grid';

import { BsMusicNote } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";

const hobbies: DeepReadonly<AdaptiveGridElementData[]> = [
    {
        content: {
            name: {
                [Language.EN]: "Music",
                [Language.FR]: "Musique",
                [Language.ES]: "Música",
            },
            color: "#00B8A9",
            icon: <BsMusicNote />,
        }
    },
    {
        content: {
            name: {
                [Language.EN]: "Self-Improvement",
                [Language.FR]: "Développement Personnel",
                [Language.ES]: "Superación Personal",
            },
            color: "#E63946",
            icon: <IoIosFitness />,
        }
    },
    {
        content: {
            name: {
                [Language.EN]: "Cybersecurity",
                [Language.FR]: "Cybersécurité",
                [Language.ES]: "Ciberseguridad",
            },
            color: "#0E7490",
            icon: <MdOutlineSecurity />,
        }
    },
    {
        content: {
            name: {
                [Language.EN]: "Design",
                [Language.FR]: "Design",
                [Language.ES]: "Diseño",
            },
            color: "#F59E0B",
            icon: <MdDesignServices />,
        }
    }
] as const;

export type Hobbies = DeepReadonly<typeof hobbies>;

export default hobbies as Hobbies;