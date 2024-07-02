'use client'
import React from 'react';
import Links from './links/Links';
import styles from './navbar.module.css'; // Importing CSS module

const Navbar = () => {
  return (
    <div className={styles.container}>
      <p>Blog8</p>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
