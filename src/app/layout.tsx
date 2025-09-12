import type { Metadata } from 'next';
import '@/styles/tailwind.css';
import { Layout } from '@/components/Layout';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'darwin',
  description: 'created by darwin',
  icons: { icon: '/cat.jpeg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
