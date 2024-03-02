import '@/app/ui/global.css';
import { raleWay } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased smooth the font */}
      <body className={`${raleWay.className} antialiased`}>{children}</body>
    </html>
  );
}
