"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const locales = ["fr", "en", "de"] as const;
type Locale = (typeof locales)[number];

type LocaleSwitcherProps = {
  currentLocale: Locale;
};

const flagSrc: Record<Locale, string> = {
  fr: "/flags/fr.svg",
  en: "/flags/gb.svg",
  de: "/flags/de.svg",
};

const flagLabel: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
};

const LocaleSwitcher = ({ currentLocale }: LocaleSwitcherProps) => {
  const pathname = usePathname() || "/";

  const buildHref = (targetLocale: Locale) => {
    const segments = pathname.split("/"); // "/fr/notre-gite/sejour"

    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = targetLocale;
      const href = segments.join("/") || `/${targetLocale}`;
      return href.startsWith("/") ? href : `/${href}`;
    }

    return targetLocale === "fr"
      ? "/fr"
      : `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  };

  return (
    <nav
      aria-label="Choisir la langue"
      className="flex gap-4 lg:gap-2 ml-2 "
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        const href = buildHref(locale);

        return (
          <Link
            key={locale}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center justify-center w-5 h-5 rounded-full border ${
              isActive
                ? "shadow-lg border-secondary"
                : "border-transparent opacity-75 hover:opacity-100"
            }`}
          >
            <Image
              src={flagSrc[locale]}
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
              className="rounded-full"
            />
            <span className="sr-only">{flagLabel[locale]}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default LocaleSwitcher;
