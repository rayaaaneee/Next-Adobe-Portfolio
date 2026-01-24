"use client";

import { useEffect, useRef, useState } from "react";

import cn from "@/util/function/cn";

import { AnchorLinkText, HeadingThree, Paragraph } from "@/components/page-flow";

import getBlogElement from "../function/get-blog-element";
import { assertFound } from "@/util/function/assert-found";

interface TableHeadingInterface {
    title: string;
    id: string;
    level: number;
    element: Element;
    childrenHeadings: TableHeadingInterface[];
    parentHeading?: TableHeadingInterface;
}

const clearEmoji = (text: string): string => {
    return text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
}

const findDOMElement = (id: string, root = document.body) => {
    const DOMHeading = root.querySelector(`#${id}`);
    if (DOMHeading) return DOMHeading;
    else throw new Error("Heading element not found in the document.");
}

const getHeadings = (element: HTMLElement): TableHeadingInterface[] => {

    const headingElements: Iterable<Element> = element.querySelectorAll('h2, h3, h4, h5, h6')
        .values().filter(
            heading => heading.classList.contains('mdx-heading')
        );

    return Array.from(headingElements).map((heading: Element) => {
        // Create TableHeadingInterface object
        const cleanTitle = clearEmoji(heading.textContent || '');
        return {
            title: cleanTitle,
            id: heading.id || (() => { throw new Error("Heading element missing id attribute.")})(),
            level: parseInt(heading.tagName.substring(1)),
            element: findDOMElement(heading.id),
            childrenHeadings: [],
        } as TableHeadingInterface;
    }).map((heading, index, arr) => {
        // Assign parent heading
        if (heading.level > 2) {
            for (let i = index -1; i >= 0; i--) {
                if (arr[i].level === heading.level -1) {
                    heading.parentHeading = arr[i];
                    arr[i].childrenHeadings.push(heading);
                    break;
                }
            }
        }
        return heading;
    });
}

const BlogTableOfContents = ({ }) => {


    const tableHeadings = useRef<TableHeadingInterface[]>([]);
    const [activeHeading, setActiveHeading] = useState<TableHeadingInterface | null>(null);

    const assertFoundHeadingById = (expectedId: string) => (assertFound(tableHeadings.current, heading => heading.id === expectedId, "Table heading"));

    const lastParentHeading = useRef<TableHeadingInterface | null>(null);

    const isActiveSubHeading = (heading: TableHeadingInterface): boolean => {
        if (lastParentHeading.current) {
            if (heading.level <= 2) return true;
            else if (
                (heading.parentHeading === lastParentHeading.current) ||
                (heading.parentHeading === activeHeading) ||
                (activeHeading?.parentHeading?.childrenHeadings.includes(heading))                   
            ) return true;      
        }
        return false;
    }

    useEffect(() => {
        
        const blogElement = document.getElementById('blog-content');
        const clearedBlogElement = getBlogElement(blogElement);

        const headings = getHeadings(clearedBlogElement);

        tableHeadings.current = headings;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const correspondingTableHeading = assertFoundHeadingById(entry.target.id);
                        setActiveHeading(correspondingTableHeading as TableHeadingInterface);
                        if (!lastParentHeading.current || correspondingTableHeading.level <= lastParentHeading.current.level) {
                            lastParentHeading.current = correspondingTableHeading as TableHeadingInterface;   
                        }
                    }
                });
            },
            {
                threshold: 1.0,
            }
        );

        headings.forEach(h => observer.observe(h.element));

        return () => observer.disconnect();

    }, []);
    
    return (
        <aside id="blog-table-of-contents" className={cn(
            'fixed to-animate appear translate-y-3 anim-delay-100 flex-col xl:w-72 2xl:w-96 justify-start items-center h-fit max-w-1/4 overflow-ellipsis',
            tableHeadings.current.length === 0 && "hidden",
        )}>
            <section className='flex flex-col'>
                <HeadingThree containerClassName="!m-0">Contents</HeadingThree>
                <section className="mt-4 [&>*]:transition-colors [&>*]:duration-200">
                    {tableHeadings.current.map((heading: TableHeadingInterface, index) => (
                        <AnchorLinkText 
                            href={`#${heading.id}`} 
                            key={index}
                            className={cn(
                                "h-[2em] flex flex-row items-center gap-2 no-underline transition-all duration-200",
                                [
                                    heading.level === 2 && "[&>p]:pl-4",
                                    heading.level === 3 && "[&>p]:pl-8",
                                    heading.level >= 4 && "[&>p]:pl-12",
                                ],
                                "[&>p]:hover:text-violet-500",
                                heading === activeHeading && [
                                    "[&>p]:text-violet-500 [&>p]:font-bold",
                                    "[&>.left-bar]:after:bg-violet-300 [&>.left-bar]:after:content-[''] [&>.left-bar]:after:block [&>.left-bar]:after:w-full [&>.left-bar]:after:h-full [&>.left-bar]:after:rounded-full",
                                    "dark:[&>p]:text-violet-300",
                                    "dark:[&>.left-bar]:after:bg-violet-400",
                                ],
                                (!isActiveSubHeading(heading)) && "hidden", 
                            )}
                        >
                            <div className={cn(
                                'left-bar',
                                'w-[3px] h-full',
                                'bg-gray-500 dark:bg-gray-300',
                                index === 0 && "rounded-t-full",
                                index === tableHeadings.current.length -1 && "rounded-b-full",
                            )}></div>
                            <Paragraph className="!m-0 text-nowrap overflow-hidden text-ellipsis text-gray-800 dark:text-gray-200">{heading.title}</Paragraph>
                        </AnchorLinkText>
                    ))}
                </section>
            </section> 
        </aside>
    );
}

export default BlogTableOfContents;
