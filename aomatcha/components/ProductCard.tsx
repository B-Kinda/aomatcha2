import styles from "@/app/styles/components/homepage.module.css";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
}

export default function ProductCard({
  name,
  description,
  price,
  image,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <Image
          src={image}
          alt={name}
          fill
          className={styles.productImageContent}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.productFooter}>
          <span className={styles.productPrice}>{price.toFixed(2)} €</span>
          <button className={styles.addToCartBtn} onClick={onAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
