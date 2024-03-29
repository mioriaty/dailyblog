import Navbar from '@/presentation/components/navbar';
import { Toaster } from '@/presentation/components/ui/toaster';
import '@/presentation/lib/styles/globals.css';
import SessionProvider from '@/presentation/providers/session-provider';
import { ThemeProvider } from '@/presentation/providers/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daily Blog',
  description: 'This is a blog built by DuongwToo',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="max-w-7xl mx-auto p-5 space-y-10 lg:p-10">
            <Navbar />
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <SessionProvider />
      </body>
    </html>
  );
}
