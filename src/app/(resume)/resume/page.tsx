const Page = () => {

    if (!process.env.RESUME_FILENAME) {
        throw new Error("RESUME_FILENAME environment variable is not set or Component is not under SSR");
    }

    return (
        <iframe className="w-full h-full" title="Resume"
            src={process.env.RESUME_FILENAME}>
        </iframe>
    );
}

export default Page;
