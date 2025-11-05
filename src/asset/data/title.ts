import assertDefined from "@/utils/function/assert-defined";

export const APP_DEFAULT_TITLE = assertDefined(process.env.NEXT_PUBLIC_NAME, 'NAME');
export const APP_DEFAULT_TEMPLATE_TITLE = `%s - ${APP_DEFAULT_TITLE}`;