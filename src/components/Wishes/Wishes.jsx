
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Wishes.module.scss';

const wishes = [
  {
    number: '01',
    symbol: '✧',
    title: 'Міцного здоров’я',
    description:
      'Нехай вистачає сил та енергії на всі плани, а кожен новий день приносить гарне самопочуття.',
  },
  {
    number: '02',
    symbol: '↗',
    title: 'Нових досягнень',
    description:
      'Нехай усі твої старання дають результати, а кожна нова вершина відкриває ще більше можливостей.',
  },
  {
    number: '03',
    symbol: '⌂',
    title: 'Сімейного тепла',
    description:
      'Нехай удома завжди чекають затишок, підтримка, щирі розмови та люди, поруч із якими добре.',
  },
  {
    number: '04',
    symbol: '☼',
    title: 'Внутрішнього спокою',
    description:
      'Бажаю менше приводів для хвилювань, більше впевненості у власних рішеннях і душевної рівноваги.',
  },
  {
    number: '05',
    symbol: '◇',
    title: 'Здійснення мрій',
    description:
      'Нехай навіть найсміливіші бажання поступово стають реальністю, а попереду завжди буде щось омріяне.',
  },
  {
    number: '06',
    symbol: '∞',
    title: 'Щасливих років',
    description:
      'Бажаю ще безлічі прекрасних років, наповнених любов’ю, цікавими подіями та незабутніми спогадами.',
  },
  {
    number: '07',
    symbol: '✈',
    title: 'Нових подорожей',
    description:
      'Більше красивих місць, захопливих маршрутів, відкриттів і пригод, які захочеться згадувати.',
  },
  {
    number: '08',
    symbol: '⚓',
    title: 'Надійних людей',
    description:
      'Нехай поруч будуть ті, кому можна довіряти, хто підтримає у складну мить і розділить радість перемог.',
  },
  {
    number: '09',
    symbol: '☕',
    title: 'Часу для себе',
    description:
      'Бажаю знаходити час на відпочинок, улюблені заняття та прості моменти, коли нікуди не потрібно поспішати.',
  },
  {
    number: '10',
    symbol: '♧',
    title: 'Удачі в усьому',
    description:
      'Нехай обставини складаються якнайкраще, можливості з’являються вчасно, а хороші новини стають звичкою.',
  },
  {
    number: '11',
    symbol: '✦',
    title: 'Більше радості',
    description:
      'Більше приводів для усмішок, несподівано приємних моментів, щирого сміху та днів, які хочеться повторити.',
  },
  {
    number: '12',
    symbol: '♡',
    title: 'Любові та вдячності',
    description:
      'Нехай ти завжди відчуваєш, наскільки тебе люблять, цінують і як багато ти означаєш для своєї сім’ї.',
  },
];

function Wishes() {
  return (
    <section id="wishes" className={styles.wishes}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Від усього серця"
          title="Найважливіші побажання"
          description="Нехай у житті завжди знаходиться місце для того, що справді має значення."
        />

        <div className={styles.grid}>
          {wishes.map((wish) => (
            <article key={wish.number} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {wish.number}
                </span>
                <span className={styles.symbol} aria-hidden="true">
                  {wish.symbol}
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.title}>{wish.title}</h3>
                <p className={styles.description}>
                  {wish.description}
                </p>
              </div>

              <span className={styles.cardLine} aria-hidden="true" />
            </article>
          ))}
        </div>

        <p className={styles.closing}>
          Найкращого тобі — сьогодні й кожного дня.
        </p>
      </div>
    </section>
  );
}

export default Wishes;
