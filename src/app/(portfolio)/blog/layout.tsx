import { ChildrenInterface } from "@/utils/interface/children";

const RootLayout = ({
    children,
    blog
} : {
    blog: React.ReactNode
} & Readonly<ChildrenInterface>) => (
    <>
        { blog }
        { children }
    </>
);

export default RootLayout;
