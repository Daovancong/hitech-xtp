import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hitech",
  description: "Hitech create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full m-0 text-base`} style={{ fontFamily: 'Helvetica Neue,Arial,sans-serif' }}
      >
        <main>
          <div>
            <div>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
