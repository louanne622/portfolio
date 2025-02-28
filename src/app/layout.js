import { Geist } from 'next/font/google';
import "./styles/global.scss";

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: 'Lou-Anne Lecocq - Portfolio',
  description: 'Portfolio de Lou-Anne Lecocq, développeuse Full Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
