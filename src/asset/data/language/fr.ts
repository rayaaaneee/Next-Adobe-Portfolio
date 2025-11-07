// Reference object for type inference for Language, used in context and hooks
import assertDefined from "@/utils/function/assert-defined";

import Language, { WithLanguage } from "@/utils/type/language";
import ArrayType from "@/utils/type/array-string";
import { title } from "process";

const frenchSentences = {
    current: Language.FR satisfies Language,
    denomination: "Français",
    languages: {
        [Language.EN]: "Anglais",
        [Language.FR]: "Français",
        [Language.ES]: "Espagnol"
    } as WithLanguage<string>,
    flag_img: "french.png",
    title: "Portfolio",
    index: {
        title: `Adobe Portfolio - ${assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')}`,
        discover: "Découvrir",
        description: {
            long: [
                assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME'),
                "Développeur Full-Stack", 
                "Cybersécurité",
            ] satisfies ArrayType<string, 3>,
            short: [
                assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME'),
                "Dev FullStack",
                "Cyber"
            ] satisfies ArrayType<string, 3>,
        },
    },
    home: {
        role: "Développeur Full-Stack & Passionné de Cybersécurité",
        location: {
            country: "France",
            city: "Lyon"
        },
        links: {
            title: "Liens",
            mail: "Mail",
            phone: "Tél.",
            resume: "CV",
        },
        about: {
            title: "À propos",
            texts: [
                "Bonjour ! Je suis <b>Rayane</b>, un <b>développeur</b> passionné avec un grand intérêt pour la <b>technologie</b> et tout ce qui touche à l'informatique. Au fil des années, j'ai consacré mon temps à la création de divers <b>projets personnels</b>, animés par ma passion pour <b>l'apprentissage</b> et <b>l'exploration de nouvelles technologies</b>.<br/>",
                "Je maîtrise le <b>développement full-stack</b> et la <b>cybersécurité</b>, avec un intérêt particulier pour <b>React</b> et <b>Next.js</b> dans le développement web. En cybersécurité, je me suis formé à travers des défis <b>Capture The Flag (CTF)</b> et j'ai appliqué ces compétences dans des <b>contextes réels</b>, renforçant ainsi ma compréhension des <b>vulnérabilités</b>, du <b>renforcement des systèmes</b> et des <b>pratiques de développement sécurisé</b>.<br/>",
                "Je suis titulaire d'un <b>BUT en Informatique</b> de l'<b>Université Lyon 1</b> (<i>parcours Développement et Implémentation</i>) et je poursuis actuellement un <b>cycle d'ingénieur en trois ans à CPE Lyon</b>, avec une spécialisation en <b>Génie Informatique et Cybersécurité</b>.<br/>",
                "Je travaille actuellement chez <b>Energy Pool</b> en tant que <b>membre de la Blue Team</b> (<i>protection contre les vulnérabilités</i>) tout au long de mes études d'ingénieur. Ce rôle renforce mes compétences en <b>détection de menaces</b>, <b>analyse d'incidents</b>, <b>gestion des vulnérabilités</b> et <b>amélioration continue des mesures défensives</b> au sein d'un <b>environnement de production</b>.<br/>",
                "📝 <i>Note</i> : Bien que mon <b>portfolio mette fortement l'accent sur le design</b>, il reflète surtout mon appréciation pour <b>l'esthétique visuelle</b> et <b>l'expérience utilisateur</b>, des aspects que je considère comme un <i>passe-temps</i> et un <i>exutoire créatif</i>. Même si j'aime concevoir des <b>interfaces épurées et visuellement attrayantes</b>, mon <b>objectif professionnel</b> est orienté vers la <b>cybersécurité</b> et le <b>développement logiciel</b>, domaines dans lesquels je souhaite approfondir mon expertise et construire une <b>carrière technique solide</b>.<br/>",
                "... certifications"
            ] satisfies ArrayType<string, 6>,
        },
        projects: {
            title: "Projets",
            description: "Une sélection de mes derniers projets de développement, explorant diverses technologies allant de l'IA et des applications web à la 3D et à la cybersécurité. Cliquez pour plonger plus profondément dans chacun d'eux, en apprendre davantage, les essayer et découvrir leur code source !"
        },
        work: {
            title: "Expériences professionnelles",
            description: "Voici un aperçu de mes expériences professionnelles, mettant en évidence mes rôles, responsabilités et les technologies avec lesquelles j'ai travaillé dans divers postes. Chaque expérience a contribué à ma croissance en tant que développeur et passionné de cybersécurité.",
            techs: "Technologies",
        },
        education: {
            title: "Éducation",
            description: "Voici un aperçu de mon parcours éducatif, mettant en lumière les institutions que j'ai fréquentées, les diplômes que j'ai obtenus et les domaines d'étude que j'ai explorés."
        },
        contact: {
            title: "Contactez-moi",
            description: "Si vous souhaitez me contacter, vous pouvez utiliser les liens ci-dessus ou m'envoyer un email à ",
        },
        skills: {
            title: "Compétences & Technologies",
            description: "Voici une sélection de mes compétences techniques et des technologies avec lesquelles j'ai de acquis de l'expérieence, allant des langages de programmation et des frameworks aux outils et plateformes.",
            parts: {
                languages: "Langages de Programmation",
                frameworks: "Frameworks",
                libraries: "Bibliothèques",
                tools: "Outils",
                databases: "Bases de Données",
            }
        },
        hobbies: {
            title: "Loisirs & Intérêts",
        },
        thanks: "Merci pour votre visite !"
    },
    blog : {
        title: "Blog",
        lang: "Langue",
        footer: "Merci de votre lecture !",
        rights: "Cet article est sous licence {cc}.",
    },
    about: {
        title: "À propos",
        some_rights_reserved: "Certains droits réservés",
        description: [
            "Ce site a été entièrement conçu et développé par mes soins afin de présenter mon parcours, mes projets et mes compétences.",
            "Les projets présentés ont tous été réalisés en tout ou en partie, par moi-même.",
            "Chaque article de la page {blog} détaille les étapes de conception, les défis rencontrés et les solutions mises en œuvre pour un projet, une problématique ou une réalisation spécifique."
        ] satisfies ArrayType<string, 3>,
        parts: {
            cookies: {
                title: "Cookies",
                description: [
                    "Ce site utilise des cookies pour améliorer votre expérience de navigation.",
                    "En continuant à utiliser ce site, vous acceptez l'utilisation des cookies conformément à la politique de confidentialité."
                ] satisfies ArrayType<string, 2>,
            },
            stack: {
                title: "Environnement Technique",
                description: [
                    "Ce site a été développé en utilisant le framework <strong>Next.js</strong> avec <strong>TypeScript</strong> pour une meilleure gestion des types.",
                    "Le style est géré avec <strong>Tailwind CSS</strong> pour une conception réactive et moderne.",
                    "L'hébergement est assuré par <strong>Vercel</strong>, offrant des performances optimales et une mise à l'échelle automatique."
                ]
            },
            inspirations: {
                title: "Inspirations",
                description: "Le logo a été inspiré du logo officiel d'Adobe Photoshop (plus généralement de l'ensemble des logos de la suite {adobe})."
            },
            license: {
                title: "Licence et droits d’utilisation",
                description: [
                    "Le design, la mise en page et les éléments visuels de ce site ont été conçus avec soin et sont protégés par le droit d’auteur.",
                    "Leur réutilisation, même partielle, n’est pas autorisée sans accord préalable.",
                    "Sauf indication contraire, tout le contenu est sous licence {cc} par l’auteur.",
                    "Cela signifie que vous êtes libre de partager (copier et redistribuer le matériel sur tout support ou format) et d’adapter (remixer, transformer et créer à partir du matériel) pour toute utilisation, même commerciale, sous les conditions suivantes :"
                ] satisfies ArrayType<string, 4>,
                parts: [
                    {
                        title: "Attribution",
                        description: [
                            "Vous devez donner un crédit approprié, fournir un lien vers la licence et indiquer si des modifications ont été apportées. Vous pouvez le faire de manière raisonnable, mais pas d'une manière qui suggère que le donneur de licence vous approuve ou approuve votre utilisation."
                        ] satisfies ArrayType<string, 1>,
                    },
                    {
                        title: "Pas de restrictions supplémentaires",
                        description: [
                            "Vous ne pouvez pas appliquer des termes juridiques ou des mesures technologiques qui restreignent légalement les autres de faire quoi que ce soit que la licence permet."
                        ] satisfies ArrayType<string, 1>,
                    },
                    {
                        title: "Mentions légales",
                        description: [
                            "Vous n'avez pas à respecter la licence pour les éléments du matériel dans le domaine public ou lorsque votre utilisation est autorisée par une exception ou une limitation applicable.",
                            "Aucune garantie n'est donnée. La licence peut ne pas vous donner tous les droits nécessaires à votre utilisation prévue. Par exemple, d'autres droits tels que la publicité, la vie privée ou les droits moraux peuvent limiter la façon dont vous utilisez le matériel."
                        ] satisfies ArrayType<string, 2>,
                    }
                ] satisfies ArrayType<{
                    title: string;
                    description: string[];
                }, 3>,
            }
        },
    },
    adaptive_grid: {
        expand: "Étendre",
        dismiss: "Réduire",
    },
    not_found: {
        title: "404 - Page introuvable",
        text: "Désolé, nous n'avons pas pu trouver la page que vous recherchez.",
    }
}

export default frenchSentences;