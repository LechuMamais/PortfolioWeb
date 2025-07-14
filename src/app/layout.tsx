import "../styles/globals.css";
import { Open_Sans, Climate_Crisis } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
  display: "swap",
});

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate-crisis",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Tu Portfolio",
  description: "Portfolio de desarrollador web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${climateCrisis.className} ${openSans.className} bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark`}>{children}</body>
    </html>
  );
}
