import { useState } from 'react';
import styles from './Header.module.scss';

const navLinks = [
{ label: 'Спогади', href: '#memories' },
{ label: 'Лист', href: '#letter' },
{ label: 'Побажання', href: '#wishes' },
];

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => setMenuOpen(false);

return (
<header className={styles.header}>
<div className={styles.container}>
<a
       href="#home"
       className={styles.brand}
       onClick={closeMenu}
       aria-label="Для тата — на головну"
     >
<span className={styles.brandTitle}>Для тата</span>
<span className={styles.brandSubtitle}>
з любов’ю, від доньки
</span>
</a>
    <button
      className={`${styles.menuToggle} ${
        menuOpen ? styles.menuToggleOpen : ''
      }`}
      type="button"
      onClick={() => setMenuOpen((open) => !open)}
      aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
      aria-expanded={menuOpen}
      aria-controls="main-navigation"
    >
      <span />
      <span />
    </button>

    <nav
      id="main-navigation"
      className={`${styles.navigation} ${
        menuOpen ? styles.navigationOpen : ''
      }`}
      aria-label="Головна навігація"
    >
      {navLinks.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className={styles.navLink}
          onClick={closeMenu}
        >
          {label}
        </a>
      ))}
    </nav>
  </div>
</header>
);
}

export default Header;