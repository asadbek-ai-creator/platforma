import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autentifikatsiya tizimi",
  description: "O'qituvchi va talaba uchun autentifikatsiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
