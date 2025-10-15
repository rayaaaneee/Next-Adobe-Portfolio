import GetStarted from "./index/get-started";
import { HeadingOne, Paragraph } from "./page-flow";

interface ComingSoonProps {
    title: string;
}

const ComingSoon = ({ title }: ComingSoonProps) => {
    return (
        <main className="w-screen h-screen flex flex-col justify-center items-center gap-3">
            <HeadingOne>{title}</HeadingOne>
            <Paragraph className="dark:text-white">Coming soon...</Paragraph>
            <GetStarted className="mt-4" colored />
        </main>
    )
}

export default ComingSoon
