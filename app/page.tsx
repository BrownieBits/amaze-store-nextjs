import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '../src/store';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      {useStore.getState().banner !== '' ? (
        <div className={styles.image_container}>
          <Image
            src={`${useStore.getState().banner.replace('//', 'https://')}`}
            alt={useStore.getState().name}
            fill
            className={styles.image}
          />
        </div>
      ) : (
        <></>
      )}

      <div>
        <Link href="/boop">Boop</Link>
        <Link href="/listing">Listing</Link>
      </div>
    </main>
  );
}
