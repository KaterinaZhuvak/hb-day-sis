
import { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './MemoryGallery.module.scss';
import PhotoCard from '../PhotoCard/PhotoCard';
import PhotoLightbox from '../PhotoLightbox/PhotoLightbox';
import photo_1 from "../../assets/photos/her/gourgeous.jpg"
import photo_2 from "../../assets/photos/her/monster-high.jpg"
import photo_3 from "../../assets/photos/family/zhuvak-fam.jpg"
import photo_4 from "../../assets/photos/her/lil-us.jpg"
import photo_5 from "../../assets/photos/her/beautiful.jpg"
import photo_6 from "../../assets/photos/her/silly.jpg"
import photo_7 from "../../assets/photos/her/trip.jpg"
import photo_8 from "../../assets/photos/family/kids.jpg"
import photo_9 from "../../assets/photos/her/casual.jpg"
import photo_10 from "../../assets/photos/family/trio.jpg"
import photo_11 from "../../assets/photos/her/sports.jpg"
import photo_12 from "../../assets/photos/her/she.jpg"
import photo_13 from "../../assets/photos/family/fam.jpg"

const memories = [
  {
    id: 1,
    category: 'her',
    image:
      photo_1,
    alt: 'Друзі проводять час разом на природі',
    title: 'Це просто ти',
    caption: 'З тобою навіть звичайний день стає особливим. ✨',
  },
  {
    id: 2,
    category: 'together',
    image:
      photo_2,
    alt: 'Портрет молодої жінки',
    title: 'Наші маленьки прригоди',
    caption: 'Ще тоді ми навіть не здогадувалися, скільки всього переживемо разом 👐',
  },
  {
    id: 3,
    category: 'family',
    image:
      photo_3,
    alt: 'Сімейні обійми',
    title: 'Тепло рідних людей',
    caption: 'Місця й люди, до яких завжди хочеться повертатися💗',
  },
  {
    id: 4,
    category: 'together',
    image:
      photo_4,
    alt: 'Весела зустріч друзів',
    title: 'Дві модельки',
    caption: 'Навіть тоді ми знали чого вартимо 😏',
  },
  {
    id: 5,
    category: 'her',
    image:
      photo_5,
    alt: 'Портрет дівчини при природному освітленні',
    title: 'У своєму світі',
    caption: 'Нехай у тебе завжди буде місце для власних мрій. 💫',
  },
  {
    id: 6,
    category: 'together',
    image:
      photo_6,
    alt: 'Люди відпочивають разом на природі',
    title: 'Моменти, що залишаються',
    caption: 'Маленькі миті, з яких складається велика історія - або стікерпаки 😆.',
  },
  {
    id: 7,
    category: 'her',
    image:
      photo_7,
    alt: 'Друзі проводять час разом на природі',
    title: 'Твоя особлива магія',
    caption: 'Залишайся собою — у цьому й є твоя краса. 💖',
  },
  {
    id: 8,
    category: 'family',
    image:
      photo_8,
    alt: 'Портрет молодої жінки',
    title: 'Завжди свої',
    caption: 'Скільки б часу не минало, є речі, які не змінюються. 🫂',
  },
  {
    id: 9,
    category: 'together',
    image:
      photo_9,
    alt: 'Сімейні обійми',  
  title: 'Наш маленький світ',
    caption: 'Дві сестрички, мільйон історій і жарти, які зрозуміємо тільки ми. 🫧',
  },
  {
    id: 10,
    category: 'family',
    image:
      photo_10,
    alt: 'Весела зустріч друзів',
    title: 'Звідси все почалося',
    caption: 'Маленькі ми, великі плани й ціле життя попереду. 🥹',
  },
  { 
    id: 11, 
    category: 'together',
    image: photo_11, 
    alt: 'Портрет дівчини при природному освітленні',
      
    title: 'Без гальм',
    caption: 'Трохи сміливості, багато сміху й жодної нудьги. 😎',
  },
  {
    id: 12,
    category: 'her',
    image: photo_12,
    alt: 'Люди відпочивають разом на природі',
    title: 'У головній ролі — ти',
    caption: 'Бо іноді достатньо одного кадру, щоб нагадати, яка ти красуня. ♡',
  },
  {
    id: 13,
    category: 'family',
    image: photo_13,
    alt: 'Портрет молодої жінки',
    title: 'Зимові історії',
    caption: 'Холодні дні, теплі спогади й пригоди, які хочеться повторити. ❄️',
  },
];

const filters = [
  { label: 'Усі спогади', value: 'all' },
  { label: 'Ми з тобою', value: 'together' },
  { label: 'Твоя магія', value: 'her' },
  { label: 'Наша родина', value: 'family' },
];

function MemoryGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMemory, setSelectedMemory] = useState(null);

  const filteredMemories =
    activeFilter === 'all'
      ? memories
      : memories.filter(
          (memory) => memory.category === activeFilter,
        );

  return (
    <section className={styles.gallery} id="memories">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Наша маленька історія"
          title="Миті, що належать нам"
          description="Сміх, пригоди, обійми й маленькі моменти, які хочеться зберегти назавжди."
        />

        <div
          className={styles.filters}
          role="group"
          aria-label="Фільтрувати спогади"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === filter.value
                  ? styles.activeFilter
                  : ''
              }`}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

     <div className={styles.grid}>
  {filteredMemories.map((memory, index) => (
    <PhotoCard
      key={memory.id}
      memory={memory}
      className={index % 3 === 1 ? styles.tilted : ''}
      onClick={() => setSelectedMemory(memory)}
    />
  ))}
</div>

        <p className={styles.note}>
          Кожна фотографія — маленька історія, яку ми зберігаємо.
        </p>
      </div>

      <PhotoLightbox
  memory={selectedMemory}
  onClose={() => setSelectedMemory(null)}
/>
    </section>
  );
}

export default MemoryGallery;
