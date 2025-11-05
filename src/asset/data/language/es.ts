import assertDefined from "@/utils/function/assert-defined";

import Language, { WithLanguage } from "@/utils/types/language";
import Sentences from "@/utils/types/sentences";

const spanishSentences: Sentences = {
    current: Language.ES,
    denomination: "Español",
    languages: {
        [Language.EN]: "Inglés",
        [Language.FR]: "Francés",
        [Language.ES]: "Español"
    } as WithLanguage<string>,
    title: "Portfolio",
    flag_img: "spanish.png",
    loader: {
        texts: [
            "Preferencias de lectura...",
            "Inicializando herramientas...",
            "Cargando la paleta...",
            "Creando tablas de conversión de color...",
            "Leyendo pinceles...",
            "Cargando .",
            "Cargando . .",
            "Cargando . . ."
        ],
        illustration_creator: "Ilustración de Flore Marquin",
        illustration_inspiration: "Ilustración inspirada en El Señor de los Anillos: Los Anillos del Poder. Para más detalles e información legal, visite la pantalla."
    },
    index: {
        title: `${assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME')} - Adobe Portfolio`,
        discover: "Empezar",
        description: {
            long: [
                assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME'),
                "Desarrollador Full-Stack",
                "Ciberseguridad"
            ],
            short: [
                assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME'),
                "Dev FullStack",
                "Ciber"
            ]
        },
    },
    home: {
        role: "Desarrollador Full-Stack & Entusiasta de la Ciberseguridad",
        location: {
            country: "Francia",
            city: "Lyon",
        },
        links: {
            title: "Enlaces",
            mail: "Correo",
            phone: "Tel.",
            resume: "CV",
        },
        about: {
            title: "Sobre mí",
            texts: [
                "¡Hola! Soy <b>Rayane</b>, un <b>desarrollador</b> apasionado con un profundo interés por la <b>tecnología</b> y todo lo relacionado con la informática. A lo largo de los años, me he dedicado a crear diversos <b>proyectos personales</b>, impulsado por mi pasión por el <b>aprendizaje</b> y la <b>exploración de nuevas tecnologías</b>.<br/>",
                "Domino el <b>desarrollo full-stack</b> y la <b>ciberseguridad</b>, con un enfoque particular en <b>React</b> y <b>Next.js</b> para el desarrollo web. En ciberseguridad, me he formado a través de desafíos <b>Capture The Flag (CTF)</b> y he aplicado esas habilidades en <b>contextos reales</b>, fortaleciendo mi comprensión de las <b>vulnerabilidades</b>, el <b>endurecimiento de sistemas</b> y las <b>prácticas de desarrollo seguro</b>.<br/>",
                "Poseo un <b>BUT en Informática</b> por la <b>Universidad de Lyon 1</b> (<i>programa de Desarrollo e Implementación</i>) y actualmente curso un <b>grado de ingeniería de tres años en CPE Lyon</b>, especializado en <b>Ingeniería Informática y Ciberseguridad</b>.<br/>",
                "Actualmente trabajo en <b>Energy Pool</b> como <b>miembro del Blue Team</b> (<i>protección contra vulnerabilidades</i>) durante mis estudios de ingeniería. Este rol refuerza mis habilidades en <b>detección de amenazas</b>, <b>análisis de incidentes</b>, <b>gestión de vulnerabilidades</b> y <b>mejora continua de las medidas defensivas</b> dentro de un <b>entorno de producción</b>.<br/>",
                "📝 <i>Nota</i> : Aunque mi <b>portafolio pone un fuerte énfasis en el diseño</b>, refleja principalmente mi aprecio por la <b>estética visual</b> y la <b>experiencia del usuario</b>, aspectos que considero un <i>pasatiempo</i> y una <i>vía creativa</i>. Aunque realmente disfruto creando <b>interfaces limpias y visualmente atractivas</b>, mi <b>enfoque profesional</b> está orientado hacia la <b>ciberseguridad</b> y el <b>desarrollo de software</b>, donde busco profundizar mis conocimientos y construir una <b>carrera técnica sólida</b>.<br/>",
                "... certificaciones",
            ]
        },
        projects: {
            title: "Proyectos",
            description: "Una selección de mis últimos proyectos de desarrollo, explorando varias tecnologías desde IA y aplicaciones web hasta 3D y ciberseguridad. Haz clic para profundizar en cada uno, aprender más sobre él, probarlo y descubrir su código fuente.",
        },
        work: {
            title: "Experiencia Laboral",
            description: "Aquí hay una visión general de mis experiencias profesionales, destacando mis roles, responsabilidades y las tecnologías con las que he trabajado en diversas posiciones. Cada experiencia ha contribuido a mi crecimiento como desarrollador y entusiasta de la ciberseguridad.",
            techs: "Tecnologías",
        },
        education: {
            title: "Educación",
            description: "Aquí hay un vistazo a mi trayectoria educativa, destacando las instituciones que he asistido, los títulos que he obtenido y los campos de estudio que he explorado."
        },
        contact: {
            title: "Ponte en contacto",
            description: "Si deseas comunicarte conmigo, puedes usar los enlaces de arriba o enviarme un correo electrónico a ",
        },
        skills : {
            title: "Habilidades y Tecnologías",
            description: "Aquí hay una selección de mis habilidades técnicas y las tecnologías con las que tengo experiencia, que van desde lenguajes de programación y marcos hasta herramientas y plataformas.",
            parts: {
                languages: "Lenguajes de Programación",
                frameworks: "Frameworks",
                libraries: "Bibliotecas",
                tools: "Herramientas",
                databases: "Bases de Datos",
            }
        },
        hobbies: {
            title: "Pasatiempos e Intereses",
        },
        thanks: "¡ Gracias por visitar !"
    },
    blog: {
        lang: "Idioma",
        footer: "¡Gracias por leer!",
    },
    about: {
        title: "Acerca de",
        main_title: "Política de Privacidad",
        main_text: "Tu privacidad es importante para mí. La política de Adobe Portfolio es respetar tu privacidad y cumplir con todas las leyes y regulaciones aplicables con respecto a la información personal que pueda recopilar sobre ti, incluso en mi sitio web, a través de la dirección",
        main_text_explaination: "Esta política ha estado en vigor desde el 7 de febrero de 2023 y fue actualizada por última vez el 7 de febrero de 2023.",
        contact_me: "Contáctame",
        contact_me_text: "Para cualquier pregunta o preocupación relacionada con tu privacidad, puedes contactarme utilizando la siguiente información de contacto:",
        informations: "Información Recopilada",
        informations_text: "La información que recolecto incluye tanto la información que proporcionas de manera consciente y activa al usar o participar en cualquiera de nuestros servicios y promociones, como cualquier información enviada automáticamente por tus dispositivos al acceder a nuestros productos y servicios.",
        log_data: "Datos de Registro",
        log_data_text: "Cuando visitas este sitio web, los servidores pueden registrar automáticamente datos estándar proporcionados por tu navegador web. Esto puede incluir la dirección IP (Protocolo de Internet) de tu dispositivo, el tipo y versión del navegador, las páginas que visitas, la hora y fecha de tu visita, el tiempo que pasas en cada página, otros detalles sobre tu visita y detalles técnicos que ocurran junto con los errores que puedas encontrar. <br/> Ten en cuenta que, aunque esta información por sí sola puede no ser personalmente identificable, puede ser posible combinarla con otros datos para identificar personalmente a personas individuales.",
        inspirations_text: "Este sitio fue completamente codificado por mí mismo con el propósito de presentar mi trayectoria, proyectos y habilidades. <br/> Del mismo modo, todos los proyectos presentados pueden haber sido parcial o completamente codificados por mí mismo. <br/> El logo fue inspirado por el logo oficial de Adobe Photoshop (más generalmente, por todos los logos de la Suite Adobe). El cargador fue inspirado por la carga oficial de Adobe Photoshop 2022.",
        personal_data: "Datos Personales",
        personal_data_text: "Es posible que se te solicite información personal que puede incluir uno o más de los siguientes elementos: <br/>• Nombre <br/>• Correo Electrónico",
        cookies: "Uso de Cookies",
        cookies_text: "El uso de 'cookies' para recopilar información sobre ti y tu actividad en nuestro sitio. Una cookie es un pequeño elemento de datos que nuestro sitio web almacena en tu computadora y al que accede cada vez que nos visitas, para que pueda entender cómo usas nuestro sitio."
    },
    adaptive_grid: {
        expand: "Expandir",
        dismiss: "Descartar",
    },
    not_found: {
        title: "404 - Página no encontrada",
        text: "Lo sentimos, no pudimos encontrar la página que estás buscando.",
    }
}

export default spanishSentences as Sentences;