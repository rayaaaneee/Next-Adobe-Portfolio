import BlogTemplate from "@/components/blog/blog-template";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    
    const { id } = await params;

    return (
        <BlogTemplate 
            id={id} 
            quitButtonClassName={"top-5 right-32"}
            quitButtonHref={"/blog"}
        />
    )
}

export default Page;