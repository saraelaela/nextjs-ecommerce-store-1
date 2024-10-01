import ProductCard from './ProductCard';
import styles from './ProductPage.module.scss';

export default function ProductPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src="./images/placeholder.webp" />
      </div>
      <h1>Product Name</h1>
      <p>Product Intro</p>
      <button>Add to cart</button>
    </>
  );
}
