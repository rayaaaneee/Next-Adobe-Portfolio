"use client";

import { useRef, useState } from 'react';

import AdaptableGrid, { AdaptableGridProps } from './adaptable-grid/adaptable-grid';

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
import tools from '@/asset/data/home/tools';
import databases from '@/asset/data/home/databases';

import { ChildrenType } from '@/utils/interface/children';
import DeepReadonly, { DeepReadonliable } from '@/utils/types/deep-readonly';

const SkillsContainer = () => {

    type GridData = AdaptableGridProps & { title: string, icon: ChildrenType };

    const buttonsRef = useRef<HTMLButtonElement[]>([]);
    const adaptableGridRef = useRef<HTMLDivElement | null>(null);

    // Data for each grid
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
            id: "tools", 
            elementsPerRow: 5, 
            elements: tools, 
            title: "Tools", 
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
            <article className='flex flex-row flex-wrap justify-around items-center [row-gap:10px]'>
                {gridData.map((grid, i) => (
                    <Button 
                    ref={el => { buttonsRef.current[i] = el!; }} 
                    key={grid.id} 
                    onClick={(e) => {
                        buttonsRef.current.forEach(btn => btn.classList.remove('active'));
                        e.currentTarget.classList.add('active');
                        const seeMoreButton = adaptableGridRef.current?.querySelector(`.see-more-button`);
                        if (seeMoreButton) {
                            if (seeMoreButton.classList.contains("expanded")) (seeMoreButton as HTMLButtonElement).click();
                        } else throw new Error("No see more button found for the grid button.");
                        setCurrentGridData(grid);
                    }} 
                    className={cn(
                        { active: i === 0 },
                    )}>
                        <HeadingTwo containerClassName={cn(
                            'sm:text-sm md:text-md lg:text-lg xl:text-xl',
                            '!m-0 p-2 md:p-3 xl:p-4'
                        )} icon={grid.icon}>
                            {grid.title}
                        </HeadingTwo>
                    </Button>
                ))}
            </article>
            <AdaptableGrid
                id={currentGridData.id} 
                ref={adaptableGridRef}
                elements={currentGridData.elements} 
                elementsPerRow={currentGridData.elementsPerRow} 
            />
        </section>
    )
}

export default SkillsContainer
