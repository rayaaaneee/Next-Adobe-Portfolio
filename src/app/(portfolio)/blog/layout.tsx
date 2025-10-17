import { ChildrenType } from "@/utils/interface/children";

const RootLayout = ({
    overlay,
    children,
} : Readonly<{
    overlay: ChildrenType,
    children: ChildrenType,
}>) => (
    <>
        { overlay }
        { children }
    </>
);

export default RootLayout;