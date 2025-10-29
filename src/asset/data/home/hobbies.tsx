import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptiveGridElementData } from '@/components/others/adaptive-grid';

import { BsMusicNote } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";

const hobbies: DeepReadonly<AdaptiveGridElementData[]> = [
    {
        content: {
            name: {
                en: "Music",
                fr: "Musique",
                es: "Música",
            },
            color: "#00B8A9",
            icon: <BsMusicNote />,
        }
    },
    {
        content: {
            name: {
                en: "Self-Improvement",
                fr: "Développement Personnel",
                es: "Superación Personal",
            },
            color: "#E63946",
            icon: <IoIosFitness />,
        }
    },
    {
        content: {
            name: {
                en: "Cybersecurity",
                fr: "Cybersécurité",
                es: "Ciberseguridad",
            },
            color: "#0E7490",
            icon: <MdOutlineSecurity />,
        }
    },
    {
        content: {
            name: {
                en: "Design",
                fr: "Design",
                es: "Diseño",
            },
            color: "#F59E0B",
            icon: <MdDesignServices />,
        }
    }
] as const;

export type Hobbies = DeepReadonly<typeof hobbies>;

export default hobbies as Hobbies;