import Link from 'next/link';
import styles from './SiteHeader.module.scss';

export default function SiteHeader(props) {
  return (
    <header>
      <nav className={styles.navArea}>
        <Link href="/">Logo</Link>
        <Link href="/">Products</Link>
        <Link href="/Cart">Cart {props.count}</Link>
      </nav>
    </header>
  );
}
