import ComingSoon from "@/components/coming-soon";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
}

const About = ({}) => {
    return (
        <ComingSoon title="About" />
    );
}

export default About;