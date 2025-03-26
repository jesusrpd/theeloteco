import { GoogleTagManager } from '@next/third-parties/google';
import { Montserrat, Montserrat } from 'next/font/google'
import localFont from 'next/font/local';
import "./globals.css";

const Antipasto = localFont({
  src: [
    {
      path: '../public/fonts/Antipasto-Pro-ExtraBold-trial.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Antipasto-Pro-ExtraLight-trial.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Antipasto-Pro-Regular-trial.ttf',
      weight: '700',
      style: 'normal',
    },   
  ],
});

const montserrat = Montserrat({
  weights: [400, 700],
  subsets: ['latin'],
  display: 'swap',
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
        className={`${Antipasto.className} ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
