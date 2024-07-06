'use client'
import React from 'react';
import Links from './links/Links';
import styles from './navbar.module.css'; // Importing CSS module
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>Blog8</Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
