import Image from "next/image";
import styles from "./styles/components/homepage.module.css";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Découvrez le véritable goût du Matcha
            </h1>
            <p className={styles.heroDescription}>
              Notre matcha premium est importé directement du Japon pour vous
              offrir une expérience authentique et des bienfaits pour la santé
              exceptionnels.
            </p>
            <div className={styles.heroActions}>
              <a href="/produits" className={styles.btnPrimary}>
                Découvrir nos produits
              </a>
              <a href="/a-propos" className={styles.btnSecondary}>
                En savoir plus
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/images/hero-matcha.jpg"
                alt="Matcha premium japonais"
                fill
                className={styles.imageContent}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className={styles.products}>
        <div className={styles.productsContainer}>
          <h2 className={styles.sectionTitle}>Nos produits populaires</h2>
          <div className={styles.productsGrid}>
            {/* Product Card 1 */}
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src="/images/products/matcha-premium.jpg"
                  alt="Matcha Premium Grade"
                  fill
                  className={styles.productImageContent}
                />
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>Matcha Premium Grade</h3>
                <p className={styles.productDescription}>
                  Notre matcha de la plus haute qualité, parfait pour les
                  cérémonies et une dégustation raffinée.
                </p>
                <div className={styles.productFooter}>
                  <span className={styles.productPrice}>29,99 €</span>
                  <button className={styles.addToCartBtn}>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src="/images/products/bol-matcha.jpg"
                  alt="Bol à Matcha Traditionnel"
                  fill
                  className={styles.productImageContent}
                />
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>
                  Bol à Matcha Traditionnel
                </h3>
                <p className={styles.productDescription}>
                  Bol artisanal fabriqué selon les traditions japonaises pour
                  préparer votre matcha.
                </p>
                <div className={styles.productFooter}>
                  <span className={styles.productPrice}>24,99 €</span>
                  <button className={styles.addToCartBtn}>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src="/images/products/fouet-bambou.jpg"
                  alt="Fouet en Bambou (Chasen)"
                  fill
                  className={styles.productImageContent}
                />
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>
                  Fouet en Bambou (Chasen)
                </h3>
                <p className={styles.productDescription}>
                  Fouet traditionnel en bambou pour obtenir la mousse parfaite
                  pour votre matcha.
                </p>
                <div className={styles.productFooter}>
                  <span className={styles.productPrice}>19,99 €</span>
                  <button className={styles.addToCartBtn}>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/produits" className={styles.btnPrimary}>
              Voir tous les produits
            </a>
          </div>
        </div>
      </section>

      {/* About Matcha Section */}
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <div className={styles.imagePlaceholder}>
              <Image
                src="/images/about-tea-leaves.jpg"
                alt="Feuilles de thé matcha cultivées à l'ombre"
                fill
                className={styles.imageContent}
              />
            </div>
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>Qu&apos;est-ce que le Matcha?</h2>
            <p className={styles.aboutText}>
              Le matcha est un thé vert japonais finement moulu qui offre un
              goût unique et des bienfaits exceptionnels pour la santé.
              Contrairement aux thés traditionnels, vous consommez la feuille
              entière, ce qui vous apporte plus d&apos;antioxydants et de
              nutriments.
            </p>
            <p className={styles.aboutText}>
              Nos feuilles de thé sont cultivées à l&apos;ombre pendant les
              dernières semaines avant la récolte, ce qui augmente la teneur en
              chlorophylle et en acides aminés, créant ainsi la saveur douce et
              umami caractéristique du matcha de qualité.
            </p>
            <a href="/a-propos" className={styles.aboutLink}>
              En savoir plus sur le matcha →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.productsContainer}>
          <h2 className={styles.sectionTitle}>Ce que nos clients disent</h2>
          <div className={styles.testimonialsGrid}>
            {/* Testimonial 1 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>
                  <Image
                    src="/images/avatars/sophie.jpg"
                    alt="Sophie L."
                    fill
                    className={styles.avatarImage}
                  />
                </div>
                <div>
                  <h3 className={styles.testimonialName}>Sophie L.</h3>
                  <div className={styles.testimonialStars}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.testimonialText}>
                &quot;Le matcha d&apos;AoMatcha est simplement exceptionnel. Sa
                saveur est douce avec des notes d&apos;umami parfaitement
                équilibrées. Je l&apos;utilise tous les matins et j&apos;ai
                remarqué une amélioration de mon énergie et de ma
                concentration.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>
                  <Image
                    src="/images/avatars/thomas.jpg"
                    alt="Thomas B."
                    fill
                    className={styles.avatarImage}
                  />
                </div>
                <div>
                  <h3 className={styles.testimonialName}>Thomas B.</h3>
                  <div className={styles.testimonialStars}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.testimonialText}>
                &quot;J&apos;ai acheté le set complet avec le bol, le fouet et
                la cuillère. La qualité est remarquable et le design est
                magnifique. Le service client était également très attentionné
                et rapide.&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>
                  <Image
                    src="/images/avatars/emma.jpg"
                    alt="Emma D."
                    fill
                    className={styles.avatarImage}
                  />
                </div>
                <div>
                  <h3 className={styles.testimonialName}>Emma D.</h3>
                  <div className={styles.testimonialStars}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className={styles.testimonialText}>
                &quot;Les biscuits japonais sont délicieux et se marient
                parfaitement avec le matcha. La livraison a été rapide et
                l&apos;emballage est très soigné. Je recommande vivement
                AoMatcha pour tous les amateurs de thé.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContainer}>
          <h2 className={styles.newsletterTitle}>Restez informé</h2>
          <p className={styles.newsletterDescription}>
            Inscrivez-vous à notre newsletter pour recevoir des conseils sur le
            matcha, des recettes exclusives et des offres spéciales.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Votre adresse email"
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
