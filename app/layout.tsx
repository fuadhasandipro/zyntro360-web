import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zyntro360 | Modern Digital Agency in Bangladesh",
  description: "Leading digital agency in Bangladesh delivering premium web design, GFX design, SEO services, and digital marketing to local and global clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-accentBlue selection:text-white relative min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
