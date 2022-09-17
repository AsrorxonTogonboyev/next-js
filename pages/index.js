import Head from 'next/head';
import styles from '../styles/product.module.scss';
import { product } from '../productid';
import Tab from '../companet/tab';



export default function Home() {
  return (
    <>
      <>
        <section className={styles.block_bg}>
          <div className="container">
            <Tab />   
          </div>
        </section>
      </>
    </>
  )
}
