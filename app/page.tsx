import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

const RootRedirectPage = () => {
  redirect(`/${defaultLocale}`);
  return null;
};

export default RootRedirectPage;

