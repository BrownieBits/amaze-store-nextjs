import Link from 'next/link';
import styles from './nav.module.scss';

export default function Nav() {
  return (
    <div className={styles.mainNavWrapper}>
      <header className={styles.mainNav}>
        <nav>
          <li>
            <Link href="/boop">Boop</Link>
          </li>
          <li>
            <Link href="/listings">Listings</Link>
          </li>
        </nav>
      </header>
    </div>
  );
}
