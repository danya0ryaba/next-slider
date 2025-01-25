import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared/components/header/Header";
import { Title } from "@/shared/components/title/Title";

export const metadata: Metadata = {
  title: "Slider",
  description: "test task slider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-[1728px] px-4 bg-background">
        <Header />
        <Title>Наши услуги</Title>
        {children}
      </body>
    </html>
  );
}
