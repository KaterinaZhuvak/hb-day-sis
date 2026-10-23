import styles from './Hero.module.scss';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.eyebrow}>
          Для найріднішої людини
        </span>

        <span className={styles.decorativeLine} aria-hidden="true" />

        <h1 className={styles.title}>
          З днем
          <br />
          <span>народження,</span>
          <br />
          тату.
        </h1>

        <p className={styles.description}>
          Про найважливіше не завжди легко сказати вголос.
          Тому сьогодні — кілька слів, які йдуть від самого серця.
        </p>

        <a href="#letter" className={styles.cta}>
          <span>Прочитати листа</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            ↗
          </span>
        </a>
      </div>

      <div className={styles.bottomNote}>
        <span className={styles.bottomLine} />
        <span>З любов’ю, твоя донька</span>
      </div>

      <a
        href="#memories"
        className={styles.scrollIndicator}
        aria-label="Перейти до спогадів"
      >
        <span className={styles.scrollText}>Гортай далі</span>
        <span className={styles.scrollLine} />
      </a>

      <span className={styles.cornerDecoration} aria-hidden="true">
        ✳
      </span>
    </section>
  );
}

export default Hero;