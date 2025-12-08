import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n.config";

const RootRedirectPage = () => {
  redirect(`/${defaultLocale}`);
};

export default RootRedirectPage;
