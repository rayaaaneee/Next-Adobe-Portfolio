import { Metadata } from "next";

import ChildrenInterface from "@/util/interface/children";


export const metadata: Metadata = {
    title: "Resume",
};

const Layout = ({ 
    children 
} : Readonly<ChildrenInterface>) => (
    <main className="w-screen h-screen">
        {children}
    </main>
);

export default Layout;
