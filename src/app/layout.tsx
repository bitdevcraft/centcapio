import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cent Capio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./icon.png" type="image/png" sizes="any" />
      <body
        className={`${montserrat.variable}  font-montserrat antialiased min-w-[425px]`}
      >
        {children}
      </body>
    </html>
  );
}
