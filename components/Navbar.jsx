import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="Telephone" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>7221 999 999</div>
        </div>

      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/'>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href='/product/${id}'>
            <li className={styles.listItem}>Product</li>
          </Link>
          <Link href='#PizzaList'>
            <li className={styles.listItem}>Menu</li>
          </Link>
          <Image src="/img/logo.png" alt="logo" width="160px" height="69px" />
          <Link href='#footer'>
            <li className={styles.listItem}>Events</li>
          </Link>
          <Link href='https://iamafoodblog.com/'>
            <li className={styles.listItem}>Blog</li>
          </Link>
          <Link href='#footer'>
            <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href='/cart'>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="logo" width="30px" height="30px" />
            <div className={styles.counter}>2</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar