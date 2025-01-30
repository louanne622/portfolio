import '@fontsource/geist';
import './globals.scss';

export const metadata = {
  title: 'Lou-Anne Lecocq - Portfolio',
  description: 'Portfolio de Lou-Anne Lecocq, développeuse Full Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-geist">{children}</body>
    </html>
  );
}
