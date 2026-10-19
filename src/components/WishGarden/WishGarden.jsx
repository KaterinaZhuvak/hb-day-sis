import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './WishGarden.module.scss';

const wishes = [
  {
    id: 1,
    flower: '✿',
    title: 'Щастя',
    message:
      'Бажаю тобі щастя не лише у великі моменти, а й у звичайні дні — коли все добре просто тому, що це твій день.',
  },
  {
    id: 2,
    flower: '❀',
    title: 'Любов',
    message:
      'Нехай поруч будуть люди, з якими ти можеш бути собою, сміятися без причини й відчувати, що тебе справді цінують.',
  },
  {
    id: 3,
    flower: '✿',
    title: 'Мрії',
    message:
      'Нехай у тебе вистачає сміливості мріяти масштабно й терпіння поступово втілювати задумане в життя.',
  },
  {
    id: 4,
    flower: '❋',
    title: 'Пригоди',
    message:
      'Бажаю подорожей, спонтанних планів і тих історій, які починаються зі слів: «А пам’ятаєш, як ми…?»',
  },
  {
    id: 5,
    flower: '✿',
    title: 'Впевненість',
    message:
      'Нехай ти частіше бачиш у собі все те хороше, що давно помічають у тобі інші.',
  },
  {
    id: 6,
    flower: '❀',
    title: 'Справжні люди',
    message:
      'Бажаю тобі дружби без заздрощів, стосунків без зайвих сумнівів і людей, яким можна довіряти.',
  },
  {
    id: 7,
    flower: '✿',
    title: 'Нові можливості',
    message:
      'Нехай перед тобою відкриваються двері, про які ти навіть не здогадувалася, і вистачає сміливості в них увійти.',
  },
  {
    id: 8,
    flower: '❋',
    title: 'Спокій',
    message:
      'Бажаю тобі внутрішнього спокою, менше непотрібних переживань і більше віри в те, що все поступово складеться.',
  },
  {
    id: 9,
    flower: '✿',
    title: 'Сміх',
    message:
      'Нехай у житті буде стільки приводів сміятися, щоб іноді доводилося витирати сльози від сміху.',
  },
  {
    id: 10,
    flower: '❀',
    title: 'Подорожі',
    message:
      'Бажаю побачити місця, які давно є у твоєму списку бажань, і знайти нові, до яких захочеться повернутися.',
  },
  {
    id: 11,
    flower: '✿',
    title: 'Маленькі радощі',
    message:
      'Смачної кави, красивих заходів сонця, улюбленої музики, затишних вечорів і всього того, що робить життя приємнішим.',
  },
  {
    id: 12,
    flower: '❋',
    title: 'Саморозвиток',
    message:
      'Нехай кожен новий рік приносить тобі щось цікаве, допомагає краще пізнавати себе й відкривати нові сторони свого характеру.',
  },
  {
    id: 13,
    flower: '✿',
    title: 'Сміливість',
    message:
      'Бажаю не відкладати життя на потім і не відмовлятися від чогось чудового лише через страх невідомого.',
  },
  {
    id: 14,
    flower: '❀',
    title: 'Улюблена справа',
    message:
      'Нехай у тебе буде справа, яка надихає, розвиває й нагадує, що ти здатна на набагато більше, ніж іноді думаєш.',
  },
  {
    id: 15,
    flower: '✿',
    title: 'Час для себе',
    message:
      'Бажаю знаходити час на відпочинок, свої маленькі ритуали й моменти, коли нікуди не потрібно поспішати.',
  },
  {
    id: 16,
    flower: '❋',
    title: 'Приємні сюрпризи',
    message:
      'Нехай життя час від часу перевершує твої очікування — найприємнішим і найнесподіванішим чином.',
  },
  {
    id: 17,
    flower: '✿',
    title: 'Гордість за себе',
    message:
      'Бажаю частіше зупинятися й помічати, скільки всього ти вже зробила, замість постійно думати про те, що ще попереду.',
  },
  {
    id: 18,
    flower: '❀',
    title: 'Затишок',
    message:
      'Нехай у тебе завжди буде місце, де можна розслабитися, видихнути й відчути себе по-справжньому комфортно.',
  },
  {
    id: 19,
    flower: '✿',
    title: 'Спільні спогади',
    message:
      'Бажаю нам ще безліч зустрічей, фотографій, спільних пригод і тих самих історій, які з часом стають тільки смішнішими.',
  },
  {
    id: 20,
    flower: '❀',
    title: 'Усе найкраще',
    message:
      'І найголовніше — нехай твої двадцяті будуть по-справжньому твоїми: з власними рішеннями, щасливими моментами, великими мріями й людьми, яких ти любиш.',
  },
];

function WishGarden() {
  const [openedWish, setOpenedWish] = useState(null);

  const handleWishClick = (id) => {
    setOpenedWish((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className={styles.garden} id="wishes">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Двадцять маленьких побажань"
          title="Нехай усе розквітає"
          description="Маленький сад побажань для твого нового десятиліття. Обирай квіточку — і відкривай те, що ховається всередині."
        />

        <div className={styles.intro}>
          <span className={styles.introFlower} aria-hidden="true">
            ❀
          </span>
          <p>
            Двадцять квіточок — двадцять побажань.
            І кожне з них я щиро бажаю тобі здійснити.
          </p>
        </div>

        <div className={styles.grid}>
          {wishes.map((wish, index) => {
            const isOpen = openedWish === wish.id;

            return (
              <button
                key={wish.id}
                type="button"
                className={`${styles.wishCard} ${
                  isOpen ? styles.open : ''
                }`}
                onClick={() => handleWishClick(wish.id)}
                aria-expanded={isOpen}
              >
                <span className={styles.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className={styles.flower} aria-hidden="true">
                  {wish.flower}
                </span>

                <span className={styles.wishTitle}>
                  {wish.title}
                </span>

                <span className={styles.cardHint}>
                  {isOpen ? 'Згорнути ↑' : 'Відкрити ✧'}
                </span>

                {isOpen && (
                  <span className={styles.message}>
                    {wish.message}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <p className={styles.closing}>
          Нехай у твоєму житті завжди знаходиться місце
          для чогось нового, прекрасного й по-справжньому твого. ♡
        </p>
      </div>
    </section>
  );
}

export default WishGarden;