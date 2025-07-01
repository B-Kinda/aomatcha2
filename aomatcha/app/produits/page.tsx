"use client";

import { useCart } from "@/contexts/CartContext";
import {
  categories,
  origins,
  priceRanges,
  products,
  tastes,
} from "@/lib/products";
import { useMemo, useState } from "react";

export default function ProduitsPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTaste, setSelectedTaste] = useState<string>("");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("name");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (selectedCategory && product.category !== selectedCategory)
        return false;
      if (selectedTaste && product.taste !== selectedTaste) return false;
      if (selectedOrigin && product.origin !== selectedOrigin) return false;
      if (selectedPriceRange) {
        const range = priceRanges.find((r) => r.label === selectedPriceRange);
        if (range && (product.price < range.min || product.price > range.max))
          return false;
      }
      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    selectedCategory,
    selectedTaste,
    selectedOrigin,
    selectedPriceRange,
    sortBy,
  ]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedTaste("");
    setSelectedOrigin("");
    setSelectedPriceRange("");
  };

  return (
    <div className="products-page">
      <div className="products-container">
        <h1 className="products-title">Nos Produits</h1>

        <div className="products-layout">
          {/* Filters Sidebar */}
          <div className="filters-sidebar">
            <div className="filters-card">
              <div className="filters-header">
                <h2 className="filters-title">Filtres</h2>
                <button onClick={clearFilters} className="filters-clear">
                  Effacer tout
                </button>
              </div>

              {/* Category Filter */}
              <div className="filter-group">
                <label className="filter-label">Catégorie</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  <option value="">Toutes les catégories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Taste Filter */}
              <div className="filter-group">
                <label className="filter-label">Goût</label>
                <select
                  value={selectedTaste}
                  onChange={(e) => setSelectedTaste(e.target.value)}
                  className="filter-select"
                >
                  <option value="">Tous les goûts</option>
                  {tastes.map((taste) => (
                    <option key={taste} value={taste}>
                      {taste.charAt(0).toUpperCase() + taste.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Origin Filter */}
              <div className="filter-group">
                <label className="filter-label">Provenance</label>
                <select
                  value={selectedOrigin}
                  onChange={(e) => setSelectedOrigin(e.target.value)}
                  className="filter-select"
                >
                  <option value="">Toutes les provenances</option>
                  {origins.map((origin) => (
                    <option key={origin} value={origin}>
                      {origin}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="filter-group">
                <label className="filter-label">Prix</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="filter-select"
                >
                  <option value="">Tous les prix</option>
                  {priceRanges.map((range) => (
                    <option key={range.label} value={range.label}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-main">
            {/* Sort and Results Count */}
            <div className="products-controls">
              <p className="products-count">
                {filteredProducts.length} produit(s) trouvé(s)
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="products-sort"
              >
                <option value="name">Trier par nom</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <div className="product-image">
                      {/* Placeholder pour l'image */}
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "var(--color-secondary-medium)",
                          color: "var(--color-primary-dark)",
                        }}
                      >
                        {product.name}
                      </div>
                    </div>
                    {product.grade && (
                      <div className="product-badge">{product.grade}</div>
                    )}
                  </div>
                  <div className="product-content">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-meta">
                      {product.taste && (
                        <p className="product-taste">Goût: {product.taste}</p>
                      )}
                      {product.origin && (
                        <p className="product-origin">
                          Origine: {product.origin}
                        </p>
                      )}
                    </div>
                    <div className="product-footer">
                      <span className="product-price">
                        {product.price.toFixed(2)} €
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className="product-add-btn"
                      >
                        {product.inStock ? "Ajouter" : "Rupture"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="no-products">
                <div className="no-products-icon">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                  </svg>
                </div>
                <h3 className="no-products-title">Aucun produit trouvé</h3>
                <p className="no-products-text">
                  Essayez de modifier vos filtres pour voir plus de produits.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
