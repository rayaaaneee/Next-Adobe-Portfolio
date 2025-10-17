import GetStarted from "./index/get-started";
import { HeadingOne, Paragraph } from "./page-flow";

interface ComingSoonProps {
    title: string;
}

const ComingSoon = ({ title }: ComingSoonProps) => {
    return (
        <main className="w-full h-full flex flex-col justify-center items-center gap-3">
            <HeadingOne containerClassName="!m-0">{title}</HeadingOne>
            <Paragraph className="dark:text-white">Coming soon...</Paragraph>
            <GetStarted className="mt-4" colored />
        </main>
    )
}

export default ComingSoon
