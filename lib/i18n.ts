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

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

export const createTranslator = (messages: Messages, prefix?: string) => {
  const base: unknown = prefix ? messages[prefix] : messages;
  const t = (key: string): string => {
    const parts = key.split(".");

    let current: unknown = base;

    for (const part of parts) {
      if (!isRecord(current) || !(part in current)) {
        return key;
      }
      current = current[part];
    }

    return typeof current === "string" ? current : key;
  };

  return t;
};
