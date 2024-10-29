import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Products",
  description: "By Felix Ng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 text-zinc-900 flex flex-col h-fit`}
      >
        <header className="bg-zinc-200 m-2 rounded-md text-center align-middle">
          <p className="my-2">Header</p>
        </header>
        {children}
        <footer className="bg-zinc-200 m-2 rounded-md text-center align-middle">
          <p className="my-2">Footer</p>
        </footer>
      </body>
    </html>
  );
}
