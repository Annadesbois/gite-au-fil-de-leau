import "server-only";

import fs from "fs";
import path from "path";

import { locales, defaultLocale, type Locale } from "./i18n.config";

export type Messages = Record<string, unknown>;

export const getMessages = (locale: Locale | undefined): Messages => {
  const safeLocale: Locale =
    locale && (locales as readonly string[]).includes(locale)
      ? locale
      : defaultLocale;

  const filePath = path.join(process.cwd(), "messages", `${safeLocale}.json`);
  const content = fs.readFileSync(filePath, "utf8");
  return JSON.parse(content) as Messages;
};
