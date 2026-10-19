
import { useState } from 'react';
import styles from './Header.module.scss';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Memories', href: '#memories' },
  { label: 'A Letter', href: '#letter' },
  { label: 'Wishes', href: '#wishes' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <a
        className={styles.logo}
        href="#home"
        onClick={closeMenu}
      >
        <span className={styles.logoIcon} aria-hidden="true">
          ✿
        </span>
        <span>Twenty & Blooming</span>
      </a>

      <button
        className={styles.menuToggle}
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={`${styles.navigation} ${
          menuOpen ? styles.navigationOpen : ''
        }`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.navLink}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
