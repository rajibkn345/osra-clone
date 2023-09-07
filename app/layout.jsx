import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Osramedical',
  description: "Discover world's best medical services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
