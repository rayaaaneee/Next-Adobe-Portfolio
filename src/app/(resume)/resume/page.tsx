import assertDefined from "@/utils/function/assert-defined";

const Page = () => {
    return (
        <iframe className="w-full h-full" title="Resume"
            src={assertDefined<string>(process.env.NEXT_PUBLIC_RESUME_FILENAME, 'RESUME_FILENAME')}>
        </iframe>
    );
}

export default Page;
