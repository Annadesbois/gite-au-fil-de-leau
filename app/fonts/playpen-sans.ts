import localFont from "next/font/local";

export const PlaypenSans = localFont({
  src: [
    {
      path: "../../public/fonts/PlaypenSans/PlaypenSans-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-playpen",
  display: "swap",
});
