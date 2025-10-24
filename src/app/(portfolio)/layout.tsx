import App from "./_app";

import Header from "@/components/others/header";
import Background from "@/components/background";

import ChildrenInterface from "@/utils/interface/children";

const RootLayout = ({
    children,
} : Readonly<ChildrenInterface>) => (
    <App>
        <Header hasFooter={true} />
        <Background />
        { children }
    </App>
);

export default RootLayout;
