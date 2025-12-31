"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n.config";

type LocaleSwitcherProps = {
  currentLocale: Locale;
};

const flagSrc: Record<Locale, string> = {
  fr: "/flags/fr.svg",
  de: "/flags/de.svg",
  en: "/flags/gb.svg",
};

const flagLabel: Record<Locale, string> = {
  fr: "Français",
  de: "Deutsch",
  en: "English",
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
    <nav aria-label="Choisir la langue" className="flex gap-4 lg:gap-2 ml-2 ">
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
                : "border-transparent hover:shadow-md hover:border-secondary/50"
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
