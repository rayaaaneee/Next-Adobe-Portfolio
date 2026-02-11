"use client";

import { HeadingOne, HeadingThree, HeadingTwo, Paragraph, AnchorLinkText } from "@/components/page-flow/page-flow";

import { ParagraphAlignment } from "@/components/page-flow/types/paragraph-alignment";

import assertDefined from "@/util/function/assert-defined";
import getCurrentYear from "@/util/function/get-current-year";
import useLanguage from "@/util/hook/use-language";
import DeepReadonly from "@/util/type/deep-readonly";
import { Fragment } from "react";

const ContentPart = () => {

    const { t, tArray } = useLanguage();

    type AboutLanguage = DeepReadonly<{
        title: string;
        description: Array<string>;
    }>

    return (
        <article id="content" className="!mx-0 pr-14 py-8 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-hover:bg-gray-500">
            <HeadingOne containerClassName="!mt-0">{ t('about.title') }</HeadingOne>
            <Paragraph alignment={ParagraphAlignment.justify} indent>
                <span>{ t('about.description.0') } </span>
                <span>{ t('about.description.1') } </span>
                <span>
                    { t('about.description.2').split("{blog}")[0] }
                    <AnchorLinkText href="/blog">{ t('blog.title') }</AnchorLinkText>
                    { t('about.description.2').split("{blog}")[1] }
                </span>
            </Paragraph>
            <HeadingTwo>{ t('about.parts.cookies.title') }</HeadingTwo>
            <Paragraph alignment={ParagraphAlignment.justify}>
                <span>{ t('about.parts.cookies.description.0') }</span>
                <span>{ t('about.parts.cookies.description.1') }</span>
            </Paragraph>
            <HeadingTwo>{ t('about.parts.stack.title') }</HeadingTwo>
            <Paragraph alignment={ParagraphAlignment.justify}>
                <span dangerouslySetInnerHTML={{ __html: t('about.parts.stack.title') + " " }}></span>
                <span dangerouslySetInnerHTML={{ __html: t('about.parts.stack.description.1') }}></span>
                <br/>
                <span dangerouslySetInnerHTML={{ __html: t('about.parts.stack.description.2') }}></span>
            </Paragraph>
            <HeadingTwo>Inspirations</HeadingTwo>
            <Paragraph alignment={ParagraphAlignment.justify}>
                <span>{ t('about.parts.inspirations.description').split("{adobe}")[0] }</span>
                <AnchorLinkText href="https://www.adobe.com/">{ "Adobe" }</AnchorLinkText>
                <span>{ t('about.parts.inspirations.description').split("{adobe}")[1] }</span>
            </Paragraph>
            <HeadingTwo>{ t('about.parts.license.title') }</HeadingTwo>
            <Paragraph alignment={ParagraphAlignment.justify}>
                <span>{ t('about.parts.license.description.0') + " " }</span>
                <span>{ t('about.parts.license.description.1') + " " }</span>
                <span> { t('about.parts.license.description.2').split("{cc}")[0] + " " }</span>
                <AnchorLinkText href="https://creativecommons.org/licenses/by/4.0/">{ "CC BY 4.0" }</AnchorLinkText>
                <span>{ t('about.parts.license.description.2').split("{cc}")[1] + " " }</span>
                <span>{ t('about.parts.license.description.3') }</span>
            </Paragraph>
            { tArray('about.parts.license.parts').map((part: AboutLanguage, index: number) => (
                <Fragment key={`license-part-${index}`}>
                    <HeadingThree>• { part.title }</HeadingThree>
                    <Paragraph alignment={ParagraphAlignment.justify}>
                        { part.description.map((desc, descIndex) => (
                            <span key={`desc-${descIndex}`}>{ desc } </span>
                        )) }
                    </Paragraph>
                </Fragment>
            )) }
            <HeadingThree containerClassName="!ml-0 w-full" className="w-full mt-5 text-end">&copy; {getCurrentYear()} {assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')}, { t('about.some_rights_reserved') }</HeadingThree>
        </article>
    )
}

export default ContentPart;
