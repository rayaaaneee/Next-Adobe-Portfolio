import assertDefined from "@/util/function/assert-defined";

import Language from "@/util/type/language";
import Sentences from "@/util/type/sentences";

const es: Sentences = {
    current: Language.ES,
    default: false,
    denomination: "Español",
    languages: {
        [Language.EN]: "Inglés",
        [Language.FR]: "Francés",
        [Language.ES]: "Español"
    },
    title: "Portfolio",
    flag_img: "spanish.png",
    coming_soon: {
        title: "Próximamente",
        text: "Esta página llegará pronto.",
        goback: "Comenzar",
    },
    copy_button: {
        tooltipText: "Copiar",
        tooltipCopiedText: "¡Copiado!",
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
        title: "Blog",
        lang: "Idioma",
        footer: "¡Gracias por leer!",
        rights: "Esta publicación está bajo la licencia {cc}.",
        words: "palabras",
        by: "por",
        readingTime: "<b>{min} min</b> de lectura",
        share: "Compartir",
        copy_button: {
            text: "Copiar el enlace",
            copiedText: "¡Enlace copiado!",
        },
        coming_soon: {
            text: "Este blog llegará pronto.",
            goback: "Regresar",
        }
    },
    about: {
        title: "Acerca de",
        some_rights_reserved: "Algunos Derechos Reservados",
        description: [
            "Este sitio fue diseñado y desarrollado íntegramente por mí para mostrar mi trayectoria, proyectos y habilidades.",
            "Los proyectos presentados fueron realizados total o parcialmente por mí.",
            "Cada artículo en la página {blog} detalla las etapas de diseño, los desafíos encontrados y las soluciones implementadas para un proyecto, problema o realización específica."
        ],
        parts: {
            cookies: {
                title: "Cookies",
                description: [
                    "Este sitio utiliza cookies para mejorar su experiencia de navegación.",
                    "Al continuar utilizando este sitio, usted acepta el uso de cookies de acuerdo con la política de privacidad."
                ]
            },
            stack: {
                title: "Entorno Técnico",
                description: [
                    "Este sitio fue desarrollado utilizando el framework <strong>Next.js</strong> con <strong>TypeScript</strong> para una mejor gestión de tipos.",
                    "El estilo se maneja con <strong>Tailwind CSS</strong> para un diseño receptivo y moderno.",
                    "El alojamiento es proporcionado por <strong>Vercel</strong>, que ofrece un rendimiento óptimo y escalado automático."
                ]
            },
            inspirations: {
                title: "Inspiraciones",
                description: "El logotipo fue inspirado por el logotipo oficial de Adobe Photoshop (más generalmente por el conjunto de logotipos de la suite {adobe})."
            },
            license: {
                title: "Licencia y derechos de uso",
                description: [
                    "El diseño, la maquetación y los elementos visuales de este sitio han sido cuidadosamente diseñados y están protegidos por derechos de autor.",
                    "Su reutilización, incluso parcial, no está permitida sin el consentimiento previo.",
                    "Excepto donde se indique lo contrario, todo el contenido está bajo licencia {cc} por el autor.",
                    "Esto significa que eres libre de compartir (copiar y redistribuir el material en cualquier medio o formato) y adaptar (remixar, transformar y construir sobre el material) para cualquier propósito, incluso comercialmente, bajo los siguientes términos:"
                ],
                parts: [
                   {
                        title: "Atribución",
                        description: [
                            "Debes dar el crédito apropiado, proporcionar un enlace a la licencia e indicar si se realizaron cambios. Puedes hacerlo de cualquier manera razonable, pero no de una manera que sugiera que el licenciante te respalda a ti o a tu uso."
                        ]
                    },
                    {
                        title: "Sin restricciones adicionales",
                        description: [
                            "No puedes aplicar términos legales o medidas tecnológicas que restrinjan legalmente a otros de hacer cualquier cosa que la licencia permita."
                        ]
                    },
                    {
                        title: "Menciones legales",
                        description: [
                            "No tienes que cumplir con la licencia para elementos del material en el dominio público o donde tu uso esté permitido por una excepción o limitación aplicable.",
                            "No se otorgan garantías. La licencia puede no darte todos los permisos necesarios para tu uso previsto. Por ejemplo, otros derechos como publicidad, privacidad o derechos morales pueden limitar cómo usas el material."
                        ]
                    }
                ]
            }
        }
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

export default es as Sentences;