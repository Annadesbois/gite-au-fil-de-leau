import { Locale } from "@/lib/i18n"

export type PageProp = {
    params: Promise<{locale: Locale}>
}