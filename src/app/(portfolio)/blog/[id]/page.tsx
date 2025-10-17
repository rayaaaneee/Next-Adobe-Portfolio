import BlogTemplate from "@/components/blog/blog-template";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    
    const { id } = await params;

    return (
        <BlogTemplate 
            className="backdrop-blur-md"
            id={id}
        />
    )
}

export default Page;