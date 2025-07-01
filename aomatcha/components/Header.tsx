"use client";

import styles from "@/app/styles/components/header.module.css";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [logoError, setLogoError] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="." className={styles.logo}>
          <div className={styles.logoContainer}>
            {!logoError && (
              <Image
                src="/images/logo.png"
                alt="AoMatcha Logo"
                width={40}
                height={40}
                className={styles.logoImage}
                priority
                onError={() => setLogoError(true)}
              />
            )}
            <span className={styles.logoText}>AoMatcha</span>
          </div>
        </a>
        <nav className={styles.nav}>
          <a href="/produits" className={styles.navLink}>
            Produits
          </a>
          <a href="/a-propos" className={styles.navLink}>
            À Propos
          </a>
          <a href="/contact" className={styles.navLink}>
            Contact
          </a>
        </nav>
        <div className={styles.actions}>
          <a href="/panier" className={styles.cartLink}>
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
            {totalItems > 0 && (
              <span className={styles.cartBadge}>{totalItems}</span>
            )}
          </a>
          <a href="/profil" className={styles.profileLink}>
            <span className="sr-only">Profil</span>
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
          <button className={styles.menuButton}>
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
  );
}
