"use client";

import { useRef, useState } from 'react';

import AdaptableGrid, { AdaptableGridElementData, AdaptableGridProps } from './adaptable-grid/adaptable-grid';

import { cn } from '@/lib/utils';

import { Button, HeadingTwo } from '../page-flow';
import { LuCodeXml } from 'react-icons/lu';
import { BsStack } from 'react-icons/bs';
import { VscLibrary } from 'react-icons/vsc';
import { AiFillTool } from 'react-icons/ai';
import { FaCloud } from 'react-icons/fa6';

import programmingLanguages from '@/asset/data/home/programming-language';
import frameworks from '@/asset/data/home/frameworks';
import libraries from '@/asset/data/home/libraries';
import devTools from '@/asset/data/home/dev-tools';
import databases from '@/asset/data/home/databases';

import { ChildrenType } from '@/utils/interface/children';
import DeepReadonly, { DeepReadonliable } from '@/utils/types/deep-readonly';

const SkillsContainer = () => {

    type GridData = AdaptableGridProps & { title: string, icon: ChildrenType };

    const buttonsRef = useRef<HTMLButtonElement[]>([]);

    const gridData: DeepReadonly<GridData[]> = [
        { 
            id: "programming-languages", 
            elementsPerRow: 5, 
            elements: programmingLanguages, 
            title: "Programming Languages", 
            icon: <LuCodeXml /> 
        },
        { 
            id: "frameworks",
            elementsPerRow: 5, 
            elements: frameworks, 
            title: "Frameworks", 
            icon: <BsStack /> 
        },
        { 
            id: "libraries",
            elementsPerRow: 4, 
            elements: libraries, 
            title: "Libraries", 
            icon: <VscLibrary /> 
        },
        { 
            id: "dev-tools", 
            elementsPerRow: 5, 
            elements: devTools, 
            title: "Dev Tools", 
            icon: <AiFillTool /> 
        },
        { 
            id: "databases", 
            elementsPerRow: 4, 
            elements: databases, 
            title: "Databases", 
            icon: <FaCloud /> 
        },
    ];

    const [currentGridData, setCurrentGridData] = useState<DeepReadonliable<GridData>>(gridData[0]);

    return (
        <section className='mt-5'>
            <article className='flex flex-row flex-wrap justify-around items-center row-gap-4'>
                {gridData.map((grid, i) => (
                    <Button ref={el => { buttonsRef.current[i] = el!; }} key={grid.id} onClick={(e) => {
                        setCurrentGridData(grid);
                        buttonsRef.current.forEach(btn => btn.classList.remove('active'));
                        e.currentTarget.classList.add('active');
                    }} 
                    className={cn(
                        { active: i === 0 },
                    )}>
                        <HeadingTwo className='text-xl' containerClassName='m-0 p-4' icon={grid.icon}>
                            {grid.title}
                        </HeadingTwo>
                    </Button>
                ))}
            </article>
            <AdaptableGrid 
                id={"grid-techs"} 
                elements={currentGridData.elements} 
                elementsPerRow={currentGridData.elementsPerRow} 
            />
        </section>
    )
}

export default SkillsContainer
