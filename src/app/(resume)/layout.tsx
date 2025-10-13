import { ChildrenInterface } from "@/utils/interface/children";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Rayane Merlin - Resume",
};

const Layout = ({ 
    children 
} : Readonly<ChildrenInterface>) => (
    <main className="w-screen h-screen">
        {children}
    </main>
);

export default Layout;
