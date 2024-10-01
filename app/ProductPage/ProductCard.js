import styles from './ProductCard.module.scss';

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <a href="">
        <img
          className={styles.productImage}
          src="./images/placeholder.webp"
          alt="a Placeholder"
        />
      </a>
      <a>
        <h1>Product Name</h1>
      </a>
      <p>Quantity</p>
      <p>Product Price</p>
      <button>Add to cart</button>
    </div>
  );
}
