"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = ["fr", "en", "de"] as const;
type Locale = (typeof locales)[number];

type LocaleSwitcherProps = {
  currentLocale: Locale;
};

const LocaleSwitcher = ({ currentLocale }: LocaleSwitcherProps) => {
  const pathname = usePathname() || "/";

  const buildHref = (targetLocale: Locale) => {
    // split current path: "/fr/notre-gite/sejour" -> ["", "fr", "notre-gite", "sejour"]
    const segments = pathname.split("/");

    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = targetLocale;
      const href = segments.join("/") || `/${targetLocale}`;
      return href.startsWith("/") ? href : `/${href}`;
    }

    // if somehow not on a locale path (e.g. "/"), prepend locale
    return targetLocale === "fr"
      ? "/fr"
      : `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  };

  const flags: Record<Locale, string> = {
    fr: "🇫🇷",
    en: "🇬🇧",
    de: "🇩🇪",
  };

  return (
    <nav
      aria-label="Choisir la langue"
      className="flex items-center gap-2 ml-2"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        const href = buildHref(locale);

        return (
          <Link
            key={locale}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xl ${
              isActive
                ? "ring-2 ring-secondary"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <span aria-hidden="true">{flags[locale]}</span>
            <span className="sr-only">
              {locale === "fr" && "Français"}
              {locale === "en" && "English"}
              {locale === "de" && "Deutsch"}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default LocaleSwitcher;
