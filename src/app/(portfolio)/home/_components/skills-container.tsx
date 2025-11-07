"use client";

import { useRef, useState } from 'react';
import useLanguage from '@/utils/hook/use-language';

import AdaptiveGrid, { AdaptiveGridProps } from '../../../../components/others/adaptive-grid';

import cn from "@/utils/function/cn";

import { Button, HeadingTwo } from '../../../../components/page-flow';
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
import DeepReadonly, { DeepReadonlyable } from '@/utils/type/deep-readonly';

const SkillsContainer = () => {

    type GridData = AdaptiveGridProps & { title: string, icon: ChildrenType };

    const { language } = useLanguage();

    const buttonsRef = useRef<HTMLButtonElement[]>([]);
    const adaptiveGridRef = useRef<HTMLDivElement | null>(null);

    // Data for each grid
    const gridData: DeepReadonly<GridData[]> = [
        { 
            id: "programming-languages", 
            elementsPerRow: 5, 
            elements: programmingLanguages, 
            title: language.home.skills.parts.languages,
            icon: <LuCodeXml /> 
        },
        { 
            id: "frameworks",
            elementsPerRow: 5, 
            elements: frameworks, 
            title: language.home.skills.parts.frameworks,
            icon: <BsStack /> 
        },
        { 
            id: "libraries",
            elementsPerRow: 4, 
            elements: libraries, 
            title: language.home.skills.parts.libraries,
            icon: <VscLibrary /> 
        },
        { 
            id: "tools", 
            elementsPerRow: 5, 
            elements: tools, 
            title: language.home.skills.parts.tools,
            icon: <AiFillTool /> 
        },
        {
            id: "databases", 
            elementsPerRow: 4, 
            elements: databases, 
            title: language.home.skills.parts.databases,
            icon: <FaCloud /> 
        },
    ];

    const [currentGridData, setCurrentGridData] = useState<DeepReadonlyable<GridData>>(gridData[0]);

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
                        const seeMoreButton = adaptiveGridRef.current?.querySelector(`.expand-button`);
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
            <AdaptiveGrid
                id={currentGridData.id} 
                ref={adaptiveGridRef}
                elements={currentGridData.elements} 
                elementsPerRow={currentGridData.elementsPerRow} 
            />
        </section>
    )
}

export default SkillsContainer
