
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Letter.module.scss';

function Letter() {
  return (
    <section id="letter" className={styles.letter}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Від доньки"
          title="Кілька слів від серця"
          description="Те, що не завжди вдається сказати вголос."
        />

        <article className={styles.letterCard}>
          <span className={styles.topOrnament} aria-hidden="true">
            ✦
          </span>

          <p className={styles.salutation}>
            Любий тату,
          </p>

          <div className={styles.letterText}>
            <p>
              З днем народження! У цей день хочеться побажати тобі
              найголовнішого — міцного здоров’я, внутрішнього спокою
              та якомога більше приводів усміхатися.
            </p>

            <p>
              Дякую тобі за все, що ти робиш для нашої сім’ї, за
              підтримку, турботу та за ті речі, які іноді залишаються
              непомітними, але насправді означають дуже багато.
            </p>

            <p>
              З роками все більше розумієш, наскільки цінними є
              прості речі: час разом, щирі розмови, спільні спогади
              та відчуття, що поруч є рідна людина.
            </p>

            <p>
              Я бажаю тобі сил для всього, про що мрієш, натхнення
              для нових починань і впевненості у власних рішеннях.
              Нехай у житті буде більше легких днів, приємних
              несподіванок і моментів, якими хочеться насолоджуватися.
            </p>

            <p>
              І найголовніше — нехай ти завжди відчуваєш, як сильно
              тебе люблять і цінують. Я дуже рада, що ти мій тато,
              і хочу, щоб попереду в нас було ще багато щасливих
              спільних моментів.
            </p>
          </div>

          <div className={styles.signature}>
            <span className={styles.signatureLabel}>
              З любов’ю,
            </span>
            <span className={styles.signatureName}>
              Твоя доця
            </span>
          </div>

          <span className={styles.bottomOrnament} aria-hidden="true">
            ✦
          </span>
        </article>
      </div>
    </section>
  );
}

export default Letter;
