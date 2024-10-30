import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "On Board Practice",
  description: "By Felix Ng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className="bg-zinc-200 m-2 rounded-md text-center align-middle">
            <p className="my-2">Header</p>
          </header>
          {children}
          <footer className="bg-zinc-200 m-2 rounded-md text-center align-middle">
            <p className="my-2">Footer</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
