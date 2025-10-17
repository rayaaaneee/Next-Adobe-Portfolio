import { BlogPost } from "@/utils/types/blog";

import networkIcon from "@/asset/img/blog/blog-1/icon-light.png";
import networkIconDark from "@/asset/img/blog/blog-1/icon-dark.png";

import svgIcon from "@/asset/img/blog/blog-2/icon-light.png";
import svgIconDark from "@/asset/img/blog/blog-2/icon-dark.png";

const blogs: BlogPost[] = [
    {
        index: 2,
        id: "svg-customization",
        title: "SVG customization using SVGR",
        date: "2024-01-01",
        summary: "This is a summary of my first blog post.",
        icon: svgIcon,
        darkIcon: svgIconDark,
    },
    {
        index: 1,
        id: "deep-learning-snake-ai",
        title: "Deep Learning : Snake AI Overview",
        date: "2024-02-01",
        summary: "This is a summary of my second blog post.",
        icon: networkIcon,
        darkIcon: networkIconDark,
    }
]

export default blogs;