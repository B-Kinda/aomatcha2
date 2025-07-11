import Header from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import footerStyles from "./styles/components/footer.module.css";
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
        <CartProvider>
          <Header />
          <main>{children}</main>
          <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
              <div className={footerStyles.grid}>
                <div>
                  <h3 className={footerStyles.title}>AoMatcha</h3>
                  <p className={footerStyles.description}>
                    Votre source de matcha premium et d&apos;accessoires
                    traditionnels japonais.
                  </p>
                  <p>
                    © {new Date().getFullYear()} AoMatcha. Tous droits réservés.
                  </p>
                </div>
                <div>
                  <h3 className={footerStyles.title}>Liens Rapides</h3>
                  <ul className={footerStyles.linksList}>
                    <li>
                      <a href="/produits" className={footerStyles.link}>
                        Nos Produits
                      </a>
                    </li>
                    <li>
                      <a href="/a-propos" className={footerStyles.link}>
                        À Propos
                      </a>
                    </li>
                    <li>
                      <a href="/livraison" className={footerStyles.link}>
                        Livraison
                      </a>
                    </li>
                    <li>
                      <a href="/cgv" className={footerStyles.link}>
                        CGV
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={footerStyles.title}>Contact</h3>
                  <p className={footerStyles.description}>
                    Email: contact@aomatcha.fr
                  </p>
                  <div className={footerStyles.socialLinks}>
                    <a
                      href="https://instagram.com"
                      aria-label="Instagram"
                      className={footerStyles.socialLink}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={footerStyles.socialIcon}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      className={footerStyles.socialLink}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={footerStyles.socialIcon}
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
        </CartProvider>
      </body>
    </html>
  );
}
