import Blog from "./_blog";

export interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const Page = async ({ params }: PageProps) => {

    const { id } = await params;

    return (<Blog id={id} />)
}

export default Page;
