import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lou-Anne Lecocq - Portfolio',
  description: 'Portfolio de Lou-Anne Lecocq, développeuse Full Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
