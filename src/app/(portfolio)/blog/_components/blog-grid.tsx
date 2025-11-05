import getBlogs from "@/asset/data/blog/blogs";
import AdaptiveGrid, { AdaptiveGridElementData } from "@/components/others/adaptive-grid";

const BlogGrid = () => (
    <AdaptiveGrid
        id={"blog"}
        elementsPerRow={4}
        asInternalLink
        elements={
            getBlogs().map((blog) => (
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
);

export default BlogGrid;
