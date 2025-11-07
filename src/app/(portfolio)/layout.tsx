import App from "$/(portfolio)/_app";

import Header from "@/components/others/header";
import Background from "@/components/background";
import CarouselImage from "@/components/carousel-image";

import ChildrenInterface from "@/utils/interface/children";

const RootLayout = ({
    children,
} : Readonly<ChildrenInterface>) => (
    <App>
        <Header hasFooter={true} />
        <Background />
        <CarouselImage />
        { children }
    </App>
);

export default RootLayout;
