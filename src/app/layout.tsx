import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Somu Cars | Quality Pre-Owned Vehicles',
  description: 'Somu Cars - Trusted second-hand car dealership offering curated, inspected vehicles with transparent pricing and easy financing.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: {
    title: 'Somu Cars',
    description: 'Trusted second-hand car dealership.',
    url: 'https://agentic-b3590987.vercel.app',
    siteName: 'Somu Cars',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: 'Somu Cars showroom'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
