import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMW Sports HQ",
  description: "Personal sports dashboard — Chelsea FC & SA Spurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
