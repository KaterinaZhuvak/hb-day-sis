
import styles from './Footer.module.scss';

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flower} aria-hidden="true">
          ✿
        </div>

        <p className={styles.message}>
          Історія триває...
        </p>

        <p className={styles.subtitle}>
          Ще більше спогадів, пригод і приводів бути щасливими.
        </p>

        <button
          type="button"
          className={styles.backToTop}
          onClick={handleBackToTop}
        >
          Повернутися на початок
          <span aria-hidden="true"> ↑</span>
        </button>

        <div className={styles.divider} aria-hidden="true">
          <span />
          <span className={styles.dividerFlower}>❀</span>
          <span />
        </div>

        <p className={styles.signature}>
          З любов'ю, для тебе ♡
        </p>

        <p className={styles.copyright}>
          Twenty &amp; Blooming · Made with love
        </p>
      </div>
    </footer>
  );
}

export default Footer;
