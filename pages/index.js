import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ date }) {
  return (
    <div className={styles.home}>
      <div className={styles.logo}>
        <Image
          src="/nacelle-logo.svg"
          width="500"
          height="400"
          alt="Nacelle Logo"
        />
      </div>
      <h1>Welcome to your Nacelle Storefront (dev)</h1>
      <h3>Current date and time: {date}</h3>
      <h4><Link href='/collections/bikes'><button>Click here to head on over to the bikes collection</button></Link></h4>
      <p>
        Edit <code className={styles.inlineCode}>pages/index.js</code> to get
        started.
      </p>
      <p>
        For help on how to build your storefront,
        <a
          href="https://docs.getnacelle.com/next/intro-next.html"
          target="none"
        >
          visit the Nacelle documentation.
        </a>
      </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const d = new Date()
  const date = d.toJSON()
  return {
    props: {
      name: 'User',
      date: date
    }, // will be passed to the page component as props
  }
}