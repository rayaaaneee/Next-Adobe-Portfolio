"use client";

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph, ParagraphAlignment, AnchorLinkText } from "@/components/page-flow";

import assertDefined from "@/utils/function/assert-defined";
import getCurrentYear from "@/utils/function/get-current-year";
import useLanguage from "@/utils/hook/use-language";
import { Fragment } from "react";

const ContentPart = () => {

    const { language } = useLanguage();

    return (
        <article id="content" className="!mx-0 pr-14 py-8 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-hover:bg-gray-500">
            <HeadingOne containerClassName="!mt-0">{ language.about.title }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify} indent>
                <span>{ language.about.description[0] } </span>
                <span>{ language.about.description[1] } </span>
                <span>
                    { language.about.description[2].split("{blog}")[0] }
                    <AnchorLinkText href="/blog">{ language.blog.title }</AnchorLinkText>
                    { language.about.description[2].split("{blog}")[1] }
                </span>
            </Paragraph>
            <HeadingTwo>{ language.about.parts.cookies.title }</HeadingTwo>
            <Paragraph alignment={ParagraphAlignment.justify}>
                <span>{ language.about.parts.cookies.description[0] }</span>
                <span>{ language.about.parts.cookies.description[1] }</span>
            </Paragraph>
            <HeadingTwo>Stack</HeadingTwo>
            <Paragraph alignment={ParagraphAlignment.justify}>
                <span dangerouslySetInnerHTML={{ __html: language.about.parts.stack.description[0] + " " }}></span>
                <span dangerouslySetInnerHTML={{ __html: language.about.parts.stack.description[1] }}></span>
                <br/>
                <span dangerouslySetInnerHTML={{ __html: language.about.parts.stack.description[2] }}></span>
            </Paragraph>
            <HeadingTwo>Inspirations</HeadingTwo>
            <Paragraph alignment={ParagraphAlignment.justify}>
                <span>{ language.about.parts.inspirations.description.split("{adobe}")[0] }</span>
                <AnchorLinkText href="https://www.adobe.com/">{ "Adobe" }</AnchorLinkText>
                <span>{ language.about.parts.inspirations.description.split("{adobe}")[1] }</span>
            </Paragraph>
            <HeadingTwo>{ language.about.parts.license.title }</HeadingTwo>
            <Paragraph alignment={ParagraphAlignment.justify}>
                <span>{ language.about.parts.license.description[0] + " " }</span>
                <span>{ language.about.parts.license.description[1] + " " }</span>
                <span> { language.about.parts.license.description[2].split("{cc}")[0] + " " }</span>
                <AnchorLinkText href="https://creativecommons.org/licenses/by/4.0/">{ "CC BY 4.0" }</AnchorLinkText>
                <span>{ language.about.parts.license.description[2].split("{cc}")[1] + " " }</span>
                <span>{ language.about.parts.license.description[3] }</span>
            </Paragraph>
            { language.about.parts.license.parts.map((part, index) => (
                <Fragment key={`license-part-${index}`}>
                    <HeadingThree>• { part.title }</HeadingThree>
                    <Paragraph alignment={ParagraphAlignment.justify}>
                        { part.description.map((desc, descIndex) => (
                            <span key={`desc-${descIndex}`}>{ desc } </span>
                        )) }
                    </Paragraph>
                </Fragment>
            )) }
            <HeadingThree containerClassName="!ml-0 w-full" className="w-full mt-5 text-end">&copy; {getCurrentYear()} {assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')}, { language.about.some_rights_reserved }</HeadingThree>
        </article>
    )
}

export default ContentPart;
