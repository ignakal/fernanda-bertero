import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fernanda Bertero | Asesora de Imagen',
  description: 'Asesora de Imagen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#E8E4DF] text-[#1F5670]">
        {children}
      </body>
    </html>
  );
}
