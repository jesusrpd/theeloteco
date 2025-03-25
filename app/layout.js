import { GoogleTagManager } from '@next/third-parties/google'
import { Geist, Geist_Mono, Gayathri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gayathri = Gayathri({
  display: "swap",
  weight: '400',
  subsets: ["latin"]
})

export const metadata = {
  title: "The Elote Co",
  description: "Página de elote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-5GF7DKFR"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gayathri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
