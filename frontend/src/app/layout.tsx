import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Courses App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body>{children}</body>
    </html>
  );
}
