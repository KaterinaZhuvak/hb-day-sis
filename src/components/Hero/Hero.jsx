import styles from './Hero.module.scss';

function Hero() {
  const handleExplore = () => {
    document
      .getElementById('memories')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.scrapbook}>
        <img
          src="/decorations/fern.svg"
          alt=""
          aria-hidden="true"
          className={`${styles.decoration} ${styles.fern}`}
        />

        <img
          src="/decorations/wildflower.svg"
          alt=""
          aria-hidden="true"
          className={`${styles.decoration} ${styles.flower}`}
        />

        <img
          src="/decorations/little-stars.svg"
          alt=""
          aria-hidden="true"
          className={`${styles.decoration} ${styles.stars}`}
        />

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            ✧ З ДНЕМ НАРОДЖЕННЯ, МОЯ РІДНА ✧
          </p>

          <h1 className={styles.title}>
            Twenty
            <span>&amp; Blooming</span>
          </h1>

          <p className={styles.subtitle}>
            Двадцять — і цілий світ попереду
          </p>

          <div className={styles.divider} aria-hidden="true">
            <span />
            ✿
            <span />
          </div>

          <p className={styles.description}>
            Ти — як квітка, що розквітає
            <br />
            у найкрасивішій порі свого життя.
          </p>

          <button
            className={styles.button}
            onClick={handleExplore}
            type="button"
          >
            Відкрити наші спогади
            <span aria-hidden="true"> →</span>
          </button>
        </div>

        <p className={styles.bottomNote}>
          MADE WITH LOVE · FOR YOUR TWENTIETH
        </p>
      </div>
    </section>
  );
}

export default Hero;