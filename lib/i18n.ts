import fs from "fs";
import path from "path";

export const locales = ["fr", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export type Messages = Record<string, unknown>;

export const getMessages = (locale: Locale): Messages => {
  const filePath = path.join(process.cwd(), "messages", `${locale}.json`);
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
