import { cn } from '@/lib/utils';

import { AnchorLinkButton, Paragraph } from '@/components/page-flow';
import GridContent from '@/asset/data/home/adaptable-grid-base';

export interface TechItemPropsInterface {
    tech: GridContent;
}

const TechItem = ({ tech }: TechItemPropsInterface) => {
    return (
        <AnchorLinkButton 
            href={tech.link || "#"}
            className="w-fit"
            buttonClassName={cn(
                "bg-transparent hover:bg-transparent",
                "flex gap-3 justify-start",
                "[&:hover>p]:underline",
                "[&:hover>.tech-icon]:opacity-100",
            )}>
                <div className={cn(
                    "tech-icon",
                    "[&>*]:w-5 [&>*]:h-5 w-5 h-5 opacity-70 transition-opacity",
                    "rounded-full w-fit text-white p-2",
                )} style={{ backgroundColor: tech.color }}>
                    {tech.icon}
                </div>
                <Paragraph className="m-0 italic">
                    {tech.name}
                </Paragraph>
        </AnchorLinkButton>
    )
}

export default TechItem;