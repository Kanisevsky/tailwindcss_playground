import { Barlow } from 'next/font/google';
import './globals.css';

const barlow = Barlow({ subsets: ['latin'], weight: ['100', '400', '700'] });

export const metadata = {
  title: 'Tailwindcss PlayGround',
  description: 'testing tailwind css features',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
