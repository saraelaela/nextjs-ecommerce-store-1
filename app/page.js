import Image from 'next/image';
import styles from './page.module.css';
import ProductPage from './ProductPage/page';
import ProductCard from './ProductPage/ProductCard';
import SiteHeader from './SiteHeader';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <SiteHeader />

      <div className={styles.productContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
