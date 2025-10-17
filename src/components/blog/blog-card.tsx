import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

import { BlogPost } from '@/utils/types/blog';
import { HeadingTwo, Paragraph } from '../page-flow';
import ClassNameInterface from '@/utils/interface/classname';

export interface BlogCardProps {
    blog: BlogPost;
    i: number;
}

const Icon = ({ src, alt, className }: { src: StaticImageData; alt: string } & ClassNameInterface) => (
    <Image src={src} alt={alt} width={128} height={128} className={cn("w-20 h-20 mb-4", className)}/>
);

const BlogCard = ({ blog, i }: BlogCardProps) => {
    return (
        <Link 
            href={`/blog/${blog.id}`}
            className={cn(
                "bg-white/80 hover:bg-white/100 dark:bg-black/80 hover:dark:bg-black/100",
                "transition-colors duration-200 ease-in-out",
                "flex flex-col items-center gap-3",
                "w-full md:w-1/2 lg:w-1/3 h-fit p-4 m-2 ",
                "rounded-lg cursor-pointer no-underline",
                "to-animate appear opacity-0 -translate-y-3",
                `anim-delay-${i*200}`
            )}>
                <HeadingTwo className='text-xl font-semibold text-gray-800 dark:text-gray-200'>{blog.title}</HeadingTwo>
                <Paragraph className='text-gray-500 dark:text-gray-400'>{new Date(blog.date).toLocaleDateString()}</Paragraph>
                <Paragraph>{blog.summary}</Paragraph>
                <Icon src={blog.icon} alt={blog.title} className='block dark:hidden' />
                <Icon src={blog.darkIcon} alt={blog.title} className="hidden dark:block" />
        </Link>
    )
}

export default BlogCard;
