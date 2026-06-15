import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/session-provider";

export const metadata: Metadata = {
  title: "Futurology",
  description: "Enterprise Innovation Discovery Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}