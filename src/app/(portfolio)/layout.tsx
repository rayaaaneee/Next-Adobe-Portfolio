import App from "./_app";

import Header from "@/components/header/header";
import Background from "@/components/background";

import { ChildrenInterface } from "@/utils/interface/children";

const RootLayout = ({
    children,
    modal
} : {
    modal: React.ReactNode
} & Readonly<ChildrenInterface>) => (
    <App>
        <Header hasFooter={true} />
        <Background />
        { modal }
        { children }
    </App>
);

export default RootLayout;
