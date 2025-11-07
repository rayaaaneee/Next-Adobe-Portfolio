import App from "$/(portfolio)/_app";

import Header from "@/components/other/header";
import Background from "@/components/background";
import CarouselImage from "@/components/carousel-image";

import ChildrenInterface from "@/util/interface/children";

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
