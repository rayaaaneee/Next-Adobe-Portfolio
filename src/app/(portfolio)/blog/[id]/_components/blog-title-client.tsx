"use client";

import { useEffect } from "react";
import useLanguage from "@/util/hook/use-language";
import { APP_DEFAULT_TEMPLATE_TITLE } from "@/asset/data/title";
import type { WithLanguage } from "@/util/type/language";

type Props = {
  title: WithLanguage<string> | string;
  defaultLang?: string;
};

const BlogTitleClient = ({ title, defaultLang }: Props) => {
  const { lang } = useLanguage();

  useEffect(() => {
    let resolved = "";
    if (typeof title === "object") {
      const key = (lang || defaultLang) as keyof typeof title;
      resolved = (title as Record<string, string>)[key] ?? Object.values(title)[0];
    } else {
      resolved = String(title);
    }

    document.title = APP_DEFAULT_TEMPLATE_TITLE.replace("%s", resolved);
  }, [title, lang, defaultLang]);

  return null;
};

export default BlogTitleClient;
