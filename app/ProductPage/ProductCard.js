import Image from 'next/image';
import Link from 'next/link';
import { items } from '../../database/items';
import styles from './ProductCard.module.scss';

export default function ProductCard(props) {
  return (
    <div className={styles.wrapper}>
      {items.map((item) => {
        return (
          <div key={`items-${items.id}`}>
            <Link href={`/ProductPage/${item.id}`}>
              <h1>{item.name}</h1>
              <Image
                src={`/images/${item.name.toLowerCase()}.webp`}
                alt={item.name}
                width={200}
                height={200}
              />
            </Link>
            <p>A paragraph with a product description and a price </p>
          </div>
        );
      })}
    </div>
  );
}
