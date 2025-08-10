import type { Metadata } from "next";
import { Kenia, Kalnia, Inter } from "next/font/google";
import { Itim } from "next/font/google";
import "./globals.css";
import App from "./components/App";
import localFont from "next/font/local";

 const eUkraineBold = localFont({
  src: "./fonts/e-Ukraine-Bold.otf", 
  variable: "--font-eukraine-bold",
  display: "swap",
});

 const eUkraineLogo = localFont({
  src: "./fonts/e-UkraineHead-LOGO.otf",
  variable: "--font-eukraine-logo",
  display: "swap",
});

const kalnia = Kalnia({
  subsets: ["latin"],
  variable: "--font-kalnia",
  display: "swap",
  weight: "400",
});

const itim = Itim({
  subsets: ["latin"],
  variable: "--font-itim",
  display: "swap",
  weight: "400",
});

const kenia = Kenia({
  subsets: ["latin"],
  variable: "--font-kenia",
  display: "swap",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

 const keywords: string[] = [
  "WeTrans",
  "пасажирські перевезення",
  "міжнародні перевезення",
  "замовити транспорт",
  "автоперевезення",
  "транспортна компанія",
  "кур'єрська доставка",
  "оренда транспорту",
  "перевезення меблів",
  "переїзд",
  "надійні перевезення",
  "послуги транспортування",
  "Lviv Bern",
  "Львів Берн",
  "Lviv Zurich",
  "Львів Цюрих",
  "Kyiv Geneva",
  "Київ Женева",
  "Ukraine Europe",
  "Kyiv Bern",
  "найкраща транспортна компанія",
  "квиток купити недорого"
];


export const metadata: Metadata = {
  applicationName: "WeTrans",
  title: "WeTrans — Сервіс надійних перевезень",
  description:
    "WeTrans — це сучасна платформа для організації вантажних та пасажирських перевезень. Замовляйте транспортування швидко, зручно та безпечно по всій Україні та за її межами.",
  keywords,
  openGraph: {
    title: "WeTrans — Сервіс надійних перевезень",
    description:
      "Швидкі та безпечні вантажні і пасажирські перевезення по Україні та за кордон. Організовуйте логістику легко з WeTrans.",
    images: [
      {
        url: "/we-trans-preview.webp",
        width: 1200,
        height: 630,
        alt: "WeTrans — Сервіс перевезень",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeTrans — Сервіс надійних перевезень",
    description:
      "WeTrans — сучасна логістична платформа для організації швидких і безпечних перевезень. Вантажі, пасажири, доставка.",
    images: [
      {
        url: "/we-trans-preview.webp",
        width: 1200,
        height: 630,
        alt: "WeTrans — Сервіс перевезень",
      },
    ],
  },
  icons: {
    icon: "/logo-last-header.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo-last-header.svg' type='image/svg+xml' />
      </head>
      <body
        className={`${kalnia.variable} ${kenia.variable} ${itim.variable} ${inter.variable} ${eUkraineBold.variable} ${eUkraineLogo.variable} antialiased`}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
