export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-50 py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Découvrez le véritable goût du Matcha
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Notre matcha premium est importé directement du Japon pour vous
              offrir une expérience authentique et des bienfaits pour la santé
              exceptionnels.
            </p>
            <div className="flex space-x-4">
              <a
                href="/produits"
                className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
              >
                Découvrir nos produits
              </a>
              <a
                href="/a-propos"
                className="px-6 py-3 border border-green-700 text-green-700 rounded-md hover:bg-green-50 transition"
              >
                En savoir plus
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-80">
              {/* Placeholder for hero image - replace with your actual image */}
              <div className="absolute inset-0 bg-green-200 rounded-lg flex items-center justify-center">
                <span className="text-green-800">Image de Matcha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos produits populaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-64 bg-gray-100 relative">
                {/* Product image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">Image de Matcha Premium</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Matcha Premium Grade
                </h3>
                <p className="text-gray-600 mb-4">
                  Notre matcha de la plus haute qualité, parfait pour les
                  cérémonies et une dégustation raffinée.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-700">
                    29,99 €
                  </span>
                  <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-64 bg-gray-100 relative">
                {/* Product image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">Image de Bol à Matcha</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Bol à Matcha Traditionnel
                </h3>
                <p className="text-gray-600 mb-4">
                  Bol artisanal fabriqué selon les traditions japonaises pour
                  préparer votre matcha.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-700">
                    24,99 €
                  </span>
                  <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="h-64 bg-gray-100 relative">
                {/* Product image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">Image de Fouet Bambou</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Fouet en Bambou (Chasen)
                </h3>
                <p className="text-gray-600 mb-4">
                  Fouet traditionnel en bambou pour obtenir la mousse parfaite
                  pour votre matcha.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-700">
                    19,99 €
                  </span>
                  <button className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/produits"
              className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 inline-block transition"
            >
              Voir tous les produits
            </a>
          </div>
        </div>
      </section>

      {/* About Matcha Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-full max-w-md h-80 mx-auto">
                {/* Placeholder for about image */}
                <div className="absolute inset-0 bg-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-green-800">
                    Image de Feuilles de Thé
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-green-900 mb-6">
                Qu&apos;est-ce que le Matcha?
              </h2>
              <p className="text-gray-700 mb-4">
                Le matcha est un thé vert japonais finement moulu qui offre un
                goût unique et des bienfaits exceptionnels pour la santé.
                Contrairement aux thés traditionnels, vous consommez la feuille
                entière, ce qui vous apporte plus d&apos;antioxydants et de
                nutriments.
              </p>
              <p className="text-gray-700 mb-6">
                Nos feuilles de thé sont cultivées à l&apos;ombre pendant les
                dernières semaines avant la récolte, ce qui augmente la teneur
                en chlorophylle et en acides aminés, créant ainsi la saveur
                douce et umami caractéristique du matcha de qualité.
              </p>
              <a
                href="/a-propos"
                className="text-green-700 font-semibold hover:underline"
              >
                En savoir plus sur le matcha →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ce que nos clients disent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  <span>S</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sophie L.</h3>
                  <div className="flex text-yellow-400">
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
              <p className="text-gray-600">
                &quot;Le matcha d&apos;AoMatcha est simplement exceptionnel. Sa
                saveur est douce avec des notes d&apos;umami parfaitement
                équilibrées. Je l&apos;utilise tous les matins et j&apos;ai
                remarqué une amélioration de mon énergie et de ma
                concentration.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  <span>T</span>
                </div>
                <div>
                  <h3 className="font-semibold">Thomas B.</h3>
                  <div className="flex text-yellow-400">
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
              <p className="text-gray-600">
                &quot;J&apos;ai acheté le set complet avec le bol, le fouet et
                la cuillère. La qualité est remarquable et le design est
                magnifique. Le service client était également très attentionné
                et rapide.&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  <span>E</span>
                </div>
                <div>
                  <h3 className="font-semibold">Emma D.</h3>
                  <div className="flex text-yellow-400">
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
              <p className="text-gray-600">
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
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir des conseils sur le
            matcha, des recettes exclusives et des offres spéciales.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 rounded-md hover:bg-green-500 transition focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
