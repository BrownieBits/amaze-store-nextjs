import { Inter } from '@next/font/google';
import Link from 'next/link';
import { useStore } from '../../src/store';
import styles from '../page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Collection() {
  return (
    <main className={styles.main}>
      <p>{useStore.getState().slug}</p>
      Hello Collection <Link href="/">Home</Link>
    </main>
  );
}
