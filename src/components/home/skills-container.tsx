import AdaptableGrid, { AdaptableGridProps } from './adaptable-grid/adaptable-grid';

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
import { cn } from '@/lib/utils';

const SkillsContainer = () => {

    const gridData: (AdaptableGridProps & { title: string, icon: ChildrenType })[] = [
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

    return (
        <section className='mt-5'>
            <article className='flex flex-row flex-wrap justify-around items-center row-gap-4'>
                {gridData.map((grid, i) => (
                    <Button key={grid.id} className={cn(
                        { active: i === 0 },
                    )}>
                        <HeadingTwo className='text-xl' containerClassName='m-0 p-4' icon={grid.icon}>
                            {grid.title}
                        </HeadingTwo>
                    </Button>
                ))}
            </article>
            {gridData.map((grid, i) => (
                <AdaptableGrid key={grid.id} className={cn({ "hidden": i > 0 })} {...grid} />
            ))}
        </section>
    )
}

export default SkillsContainer
