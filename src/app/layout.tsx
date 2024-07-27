import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ConvexClientProvider } from '@/context/ConvexClientProvier';
import { Header } from '@/components/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Realtime Notification System',
  description: 'Receive notifications as a user in realtime.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen-md w-full h-screen mx-auto ${inter.className}`}
      >
        <ConvexClientProvider>
          <Header />
          <main className="flex justify-center items-center h-3/4">
            {children}
          </main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
