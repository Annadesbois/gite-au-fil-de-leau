import { Locale } from "@/lib/i18n.config"

export type PageProp = {
    params: Promise<{locale: Locale}>
}