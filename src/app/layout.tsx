
import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import './globals.css';
import {Toaster} from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'StockPilot',
  description: 'Inventory Management System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
