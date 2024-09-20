import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'practice-next-app',
  description: "let's make next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
