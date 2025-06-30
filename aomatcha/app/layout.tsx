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
  title: "AoMatcha - Thé Matcha Premium, Accessoires et Biscuits",
  description:
    "Découvrez notre sélection de thé matcha premium, accessoires traditionnels et biscuits japonais. Livraison rapide dans toute la France.",
  keywords:
    "matcha, thé matcha, thé japonais, accessoires matcha, biscuits japonais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="##" className="text-2xl font-bold text-green-800">
              AoMatcha
            </a>
            <nav className="hidden md:flex space-x-6">
              <a
                href="/produits"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Produits
              </a>
              <a
                href="/matcha"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Matcha
              </a>
              <a
                href="/accessoires"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Accessoires
              </a>
              <a
                href="/a-propos"
                className="text-gray-700 hover:text-green-600 transition"
              >
                À Propos
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="/panier" className="text-gray-700 hover:text-green-600">
                <span className="sr-only">Panier</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </a>
              <button className="md:hidden">
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-green-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">AoMatcha</h3>
                <p className="mb-4">
                  Votre source de matcha premium et d&apos;accessoires
                  traditionnels japonais.
                </p>
                <p>
                  © {new Date().getFullYear()} AoMatcha. Tous droits réservés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/produits" className="hover:underline">
                      Nos Produits
                    </a>
                  </li>
                  <li>
                    <a href="/a-propos" className="hover:underline">
                      À Propos
                    </a>
                  </li>
                  <li>
                    <a href="/livraison" className="hover:underline">
                      Livraison
                    </a>
                  </li>
                  <li>
                    <a href="/cgv" className="hover:underline">
                      CGV
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="mb-2">Email: contact@aomatcha.fr</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="hover:text-green-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="hover:text-green-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
