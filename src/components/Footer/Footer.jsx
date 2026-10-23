
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.ornament} aria-hidden="true">
          ✦
        </span>

        <p className={styles.message}>
          Найцінніше — це моменти, проведені разом.
        </p>

        <a
          href="#home"
          className={styles.backToTop}
          aria-label="Повернутися на початок сторінки"
        >
          <span className={styles.arrow} aria-hidden="true">
            ↑
          </span>
          <span>На початок</span>
        </a>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <a href="#home" className={styles.brand}>
            З любов’ю, доця
          </a>

          <p className={styles.copyright}>
            Створено з любов’ю ♡
          </p>

          <a href="#letter" className={styles.letterLink}>
            Ще раз прочитати лист
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
