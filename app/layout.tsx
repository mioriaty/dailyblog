import Navbar from '@/presentation/components/navbar';
import '@/presentation/lib/styles/globals.css';
import SessionProvider from '@/presentation/providers/session-provider';
import { ThemeProvider } from '@/presentation/providers/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SessionProvider>
            <main className="max-w-7xl mx-auto p-10 space-y-5">
              <Navbar />
              {children}
            </main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
