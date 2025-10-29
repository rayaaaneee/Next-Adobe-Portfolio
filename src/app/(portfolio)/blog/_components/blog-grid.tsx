import { BlogPosts } from "@/asset/data/blog/blogs";
import AdaptiveGrid, { AdaptiveGridElementData } from "@/components/others/adaptive-grid";
import { BlogPost } from "@/utils/types/blog";
import { DeepReadonlyable } from "@/utils/types/deep-readonly";

const BlogGrid = ({ blogs }: { blogs: BlogPosts }) => {

    return (
        <AdaptiveGrid
            id={"blog"}
            elementsPerRow={4}
            asInternalLink
            elements={
                blogs.map((blog: DeepReadonlyable<BlogPost>) => (
                    { 
                        content: {
                            name: blog.title,
                            color: blog.color,
                            icon: blog.icon,
                            link: `/blog/${blog.id}`,
                        }
                    } satisfies AdaptiveGridElementData
                ))} 
        />
    )
}

export default BlogGrid;
