import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UnivGeeks",
  description: "Notes, PYQs and learning resources for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}