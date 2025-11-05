import path from "path";
import { readFile } from "fs/promises";
import { twig } from "twig";

const readTemplate = async (templateName: string) => {
    const templatePath = path.join(process.cwd(), 'src', 'app', '(static)', templateName, 'template.twig');
    const templateContent = await readFile(templatePath, 'utf8');
    return twig({ data: templateContent });
}

export default readTemplate;