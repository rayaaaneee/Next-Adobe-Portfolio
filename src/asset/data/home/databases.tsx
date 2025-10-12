import Image from 'next/image';

import type DeepReadonly from '@/utils/types/deep-readonly';

import type { AdaptableGridElementData } from '@/components/home/adaptable-grid/adaptable-grid';

import { baseImageProps, baseIconProps } from './base';

import sqliteImg from "~/img/home/databases/sqlite.png";
import { GrMysql } from "react-icons/gr";
import { TbBrandMongodb } from "react-icons/tb";
import firebaseImg from "~/img/home/databases/firebase.png";

const databases: DeepReadonly<AdaptableGridElementData[]> = [
    {
        name: "SQLite",
        color: "#003B57",
        icon: <Image {...baseImageProps} src={sqliteImg.src} alt={`SQLite`} />,
        link: "https://www.sqlite.org/"
    },
    {
        name: "MySQL",
        color: "#4479A1",
        icon: <GrMysql {...baseIconProps} />,
        link: "https://www.mysql.com/"
    },
    {
        name: "MongoDB",
        color: "#47A248",
        icon: <TbBrandMongodb {...baseIconProps} />,
        link: "https://www.mongodb.com/"
    },
    {
        name: "Firebase",
        color: "#ff9100",
        icon: <Image {...baseImageProps} src={firebaseImg.src} alt={`Firebase`} />,
        link: "https://firebase.google.com/"
    }
] as const;

export type Databases = DeepReadonly<typeof databases>;

export default databases as Databases;