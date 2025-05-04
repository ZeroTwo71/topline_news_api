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
  title: "Topline News - Latest Headlines",
  description: "Get the latest news from various categories and countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8`}
      >
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Topline News
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Latest headlines from around the world
          </p>
        </header>
        {children}
        <footer className="mt-12 py-4 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-1">
              Powered by{" "}
              <a
                href="https://newsapi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                NewsAPI.org
              </a>{" "}
              | &copy; {new Date().getFullYear()} Roby Firmansyah N.
            </p>
            <p>Built with Next.js, Tailwind and Vercel</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
