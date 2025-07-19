// app/layout.tsx

import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/../components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Winston BP Coach',
  description: 'Practice British Parliamentary debates with AI-powered coaching',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900`}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
