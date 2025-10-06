import { Metadata } from 'next';
import ComingSoon from '@/components/coming-soon';

export const metadata: Metadata = {
    title: "Blog",
}

const Blog = () => {
    return (
        <ComingSoon title="Blog" />
    )
}

export default Blog;
