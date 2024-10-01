import styles from './SiteHeader.module.scss';

export default function SiteHeader() {
  return (
    <header>
      <div className={styles.navArea}>
        {' '}
        <div>Logo</div> <div>Cart</div>
      </div>
    </header>
  );
}
