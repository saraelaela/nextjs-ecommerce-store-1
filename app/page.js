import styles from './page.module.css';
import ProductCard from './ProductPage/ProductCard';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductCard />
      </main>

      <div className={styles.productContainer}></div>
    </div>
  );
}
