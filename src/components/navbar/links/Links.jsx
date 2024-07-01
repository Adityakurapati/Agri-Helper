import React from 'react';
import Link from 'next/link'

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Admin", path: "/admin" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" }
  ];

  return (
    <>
      {links.map(link => (
        <Link key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;
