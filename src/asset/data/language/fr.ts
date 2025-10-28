// Reference object for type inference for Language, used in context and hooks
import Language from "@/utils/types/language";

const frenchSentences = {
    current: Language.FR,
    denomination: "Français",
    languages: {
        en: "Anglais",
        fr: "Français",
        es: "Espagnol"
    },
    flag_img: "french.png",
    title: "Portfolio",
    loader: {
        texts: [
            "Lecture des préférences...",
            "Initialisation des outils...",
            "Chargement de la palette...",
            "Création des tables de conversion des couleurs...",
            "Lecture des pinceaux...",
            "Chargement .",
            "Chargement . .",
            "Chargement . . ."
        ],
        illustration_creator: "Illustration de Flore Marquin",
        illustration_inspiration: "Illustration inspirée par le seigneur des anneaux : Les anneaux de pouvoirs. \"Pour obtenir plus de détails et des informations juridiques, rendez vous sur l&apos;écran.\""
    },
    menu: {
        index: "Accueil",
        home: "Portfolio",
        blog: "Blog",
        about: "À propos"
    },
    index: {
        title: "Adobe Portfolio - Rayane Merlin",
        discover: "Découvrir",
        description: {
            long: [
                "Rayane Merlin", 
                "Développeur Full-Stack", 
                "Cybersécurité",
            ],
            short: [
                "Rayane Merlin",
                "Dev FullStack",
                "Cyber"
            ]
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
            title: "About me",
            texts: [
                "Bonjour ! Je suis <b>Rayane</b>, un <b>développeur</b> passionné avec un grand intérêt pour la <b>technologie</b> et tout ce qui touche à l&apos;informatique. Au fil des années, j&apos;ai consacré mon temps à la création de divers <b>projets personnels</b>, animés par ma passion pour <b>l&apos;apprentissage</b> et <b>l&apos;exploration de nouvelles technologies</b>.<br/>",
                "Bien que mon <b>portfolio mette fortement l&apos;accent sur le design</b>, il reflète surtout mon appréciation pour <b>l&apos;esthétique visuelle</b> et <b>l&apos;expérience utilisateur</b>, des aspects que je considère comme un <i>passe-temps</i> et un <i>exutoire créatif</i>. Même si j&apos;aime concevoir des <b>interfaces épurées et visuellement attrayantes</b>, mon <b>objectif professionnel</b> est orienté vers la <b>cybersécurité</b> et le <b>développement logiciel</b>, domaines dans lesquels je souhaite approfondir mon expertise et construire une <b>carrière technique solide</b>.<br/>",
                "Je maîtrise le <b>développement full-stack</b> et la <b>cybersécurité</b>, avec un intérêt particulier pour <b>React</b> et <b>Next.js</b> dans le développement web. En cybersécurité, je me suis formé à travers des défis <b>Capture The Flag (CTF)</b> et j&apos;ai appliqué ces compétences dans des <b>contextes réels</b>, renforçant ainsi ma compréhension des <b>vulnérabilités</b>, du <b>renforcement des systèmes</b> et des <b>pratiques de développement sécurisé</b>.<br/>",
                "Je suis titulaire d&apos;un <b>BUT en Informatique</b> de l&apos;<b>Université Lyon 1</b> (<i>parcours Développement et Implémentation</i>) et je poursuis actuellement un <b>cycle d&apos;ingénieur en trois ans à CPE Lyon</b>, avec une spécialisation en <b>Génie Informatique et Cybersécurité</b>.<br/>",
                "Je travaille actuellement chez <b>Energy Pool</b> en tant que <b>membre de la Blue Team</b> (<i>protection contre les vulnérabilités</i>) tout au long de mes études d&apos;ingénieur. Ce rôle renforce mes compétences en <b>détection de menaces</b>, <b>analyse d&apos;incidents</b>, <b>gestion des vulnérabilités</b> et <b>amélioration continue des mesures défensives</b> au sein d&apos;un <b>environnement de production</b>.<br/>",
                "... certifications"
            ]
        },
        projects: {
            title: "Projets",
            description: "Une sélection de mes derniers projets de développement, explorant diverses technologies allant de l'IA et des applications web à la 3D et à la cybersécurité. Cliquez pour plonger plus profondément dans chacun d'eux, en apprendre davantage, les essayer et découvrir leur code source !"
        },
        work: {
            title: "Expériences professionnelles",
            description: "Voici un aperçu de mes expériences professionnelles, mettant en évidence mes rôles, responsabilités et les technologies avec lesquelles j'ai travaillé dans divers postes. Chaque expérience a contribué à ma croissance en tant que développeur et passionné de cybersécurité.",
            techs: "Technologies",
        }
    },
    about: {
        title: "À propos",
        main_title: "Politique de confidentialité",
        main_text: "Votre vie privée est importante pour moi. La politique d&apos;Adobe PortFolio est de respecter votre vie privée et de se conformer à toutes les lois et réglementations applicables concernant les informations personnelles que je pourrais collecter à votre sujet, y compris sur mon site Web, par l&apos;adresse",
        main_text_explaination: "Cette politique est en vigueur depuis le 7 février 2023 et a été mise à jour pour la dernière fois le 7 février 2023.",
        contact_me: "Me contacter",
        contact_me_text: "Pour toute question ou préoccupation concernant votre vie privée, vous pouvez me contacter en utilisant les coordonnées suivantes :",
        informations: "Informations collectées",
        informations_text: "Les informations que je collecte incluent à la fois les informations que vous fournissez sciemment et activement lorsque vous utilisez ou participez à l&apos;un de nos services et promotions, et toute information envoyée automatiquement par vos appareils lors de l&apos;accès à nos produits et services.",
        log_data: "Log Data",
        log_data_text: "Lorsque vous visitez ce site Web, les serveurs peuvent enregistrer automatiquement les données standard fournies par votre navigateur Web. Il peut inclure l&apos;adresse IP (Internet Protocol) de votre appareil, le type et la version de votre navigateur, les pages que vous visitez, l&apos;heure et la date de votre visite, le temps passé sur chaque page, d&apos;autres détails sur votre visite et des détails techniques qui se produisent dans conjonction avec les erreurs que vous pourriez rencontrer. <br/> Veuillez noter que même si ces informations peuvent ne pas être personnellement identifiables en elles-mêmes, il peut être possible de les combiner avec d&apos;autres données pour identifier personnellement des personnes individuelles.",
        inspirations_text: "Ce site a été entièrement codé par mes soins dans le but de présenter mon parcours, mes projets et mes compétences. <br/> De même, tous les projets présentés ont pu être codés en partie ou entièrement par mes soins. <br/> Le logo a été inspiré du logo officiel d&apos;Adobe Photoshop (plus généralement de l\"ensemble des logos de la suite Adobe). Le loader a lui été inspiré du chargement officiel d&apos;Adobe Photoshop 2022.",
        personal_data: "Données personnelles",
        personal_data_text: "Il pourrait vous être demandées des informations personnelles qui peuvent inclure un ou plusieurs des éléments suivants :<br/>• Nom<br/>• Email",
        cookies: "Utilisation des cookies",
        cookies_text: "L&apos;utilisation des « cookies » pour collecter des informations sur vous et votre activité sur notre site. Un cookie est un petit élément de données que notre site Web stocke sur votre ordinateur et auquel il accède à chaque fois que vous visitez, afin que je puissions comprendre comment vous utilisez notre site."
    },
    not_found: {
        title: "Page introuvable"
    }
}

export default frenchSentences;