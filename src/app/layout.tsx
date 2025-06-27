import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import { AuthProvider } from './context/AuthContext';

export const metadata: Metadata = {
  title: 'Example App',
  description: 'A sample Next.js app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light min-vh-100 position-relative">
        <div className="position-fixed top-0 end-0 p-4 z-3" style={{ zIndex: 1050 }}>
          <Image
            src="/logo.png"
            alt="Example Logo"
            width={120}
            height={40}
            className="img-fluid"
            priority
          />
        </div>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}