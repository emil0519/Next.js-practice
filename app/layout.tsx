import '@/app/ui/global.css';
import { raleWay } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleWay.className} antialiased`}>{children}</body>
    </html>
  );
}
