import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "./globals.css";
import FooterMain from "@/components/FooterMain";
export const metadata = {
  title: "SwiftyEx(Bot)",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1F1548] w-full">
        {children}
        <FooterMain />
      </body>
    </html>
  );
}
