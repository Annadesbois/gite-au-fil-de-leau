import { Locale } from "@/lib/i18n"

export type PageProps = {
    params: Promise<{locale: Locale}>
}