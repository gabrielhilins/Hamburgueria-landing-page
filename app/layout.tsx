import type { Metadata } from "next";
import { Inter, Oswald, Quicksand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Iron Burger | Onde o Ferro Encontra o Fogo",
  description: "A melhor hamburgueria da cidade. Dark Industrial, Sabor Monstruoso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} ${quicksand.variable}`}>
      <body className="antialiased bg-[#121212] text-white">
        {children}
      </body>
    </html>
  );
}
