import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptiveGridElementData } from '@/components/others/adaptive-grid';

import { baseImageProps } from './adaptive-grid-base';

import { assertFoundTech, GeneralTechnologiesName } from './general-technologies-list';
import sqliteImg from "~/img/home/databases/sqlite.png";
import firebaseImg from "~/img/home/databases/firebase.png";

const databases: DeepReadonly<AdaptiveGridElementData[]> = [
    {
        content: assertFoundTech(
            GeneralTechnologiesName.SQLITE,
            "database"
        ),
        customIcon: <Image {...baseImageProps} src={sqliteImg.src} alt={GeneralTechnologiesName.SQLITE} />,
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.MYSQL,
            "database"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.MONGODB,
            "database"
        ),
    },
    {
        content: assertFoundTech(
            GeneralTechnologiesName.FIREBASE,
            "database"
        ),
        customIcon: <Image {...baseImageProps} src={firebaseImg.src} alt={GeneralTechnologiesName.FIREBASE} />,
    }
] as const;

export type Databases = DeepReadonly<typeof databases>;

export default databases as Databases;