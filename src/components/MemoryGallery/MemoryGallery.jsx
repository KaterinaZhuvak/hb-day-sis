import { useCallback, useState } from 'react';

import SectionHeading from '../SectionHeading/SectionHeading';
import PhotoCard from '../PhotoCard/PhotoCard';
import PhotoLightbox from '../PhotoLightbox/PhotoLightbox';

import styles from './MemoryGallery.module.scss';

import photo_1 from '../../assets/photos/images/family-photo.jpg';
import photo_2 from '../../assets/photos/images/dad-maldives.jpg';
import photo_3 from "../../assets/photos/images/dm-london.jpg";
import photo_4 from "../../assets/photos/images/dda-children.jpg";
import photo_5 from "../../assets/photos/images/dad-scar.jpg";
import photo_6 from "../../assets/photos/images//balogs.jpg";
import photo_7 from "../../assets/photos/images/hero-family.jpg";
import photo_8 from "../../assets/photos/images/dad-diver.jpg";

const memories = [
  {
    id: 1,
    src: photo_1,
    alt: 'Тато та донька разом',
    title: 'Наші моменти',
    description: 'Спогади, до яких завжди хочеться повертатися.',
    size: 'large',
  },
  {
    id: 2,
    src: photo_2,
    alt: 'Сімейний момент',
    title: 'У своїй стихії',
    description: 'Сміливість, характер і любов до пригод.',
    size: 'small',
  },
  {
    id: 3,
    src: photo_3,
    alt: 'Щасливий день разом',
    title: 'Щасливі дні',
    description: 'Миті, які залишаються з нами.',
    size: 'small',
  },
  {
    id: 4,
    src: photo_4,
    alt: 'Спільна сімейна фотографія',
    title: 'Наша опора',
    description: 'Людина, поруч із якою відчуваєш себе вдома.',
    size: 'large',
  },
  {
    id: 5,
    src: photo_5,
    alt: 'Тато та донька разом',
    title: 'Назустріч пригодам',
    description: 'Найкращі історії починаються за межами звичного.',
    size: 'large',
  },
  {
    id: 6,
    src: photo_6,
    alt: 'Сімейний момент',
    title: 'За одним столом',
    description: 'Смачні страви, щирі розмови й друзі, перевірені часом.',
    size: 'small',
  },
  {
    id: 7,
    src: photo_7,
    alt: 'Щасливий день разом',
    title: 'Найрідніші',
    description: 'Звичайні миті, які з часом стають найдорожчими спогадами.',
    size: 'small',
  },
  {
    id: 8,
    src: photo_8,
    alt: 'Тато та донька разом',
    title: 'Дайвесркі пригоди',
    description: 'Особливий талант перетворювати звичайні моменти на кумедні історії.',
    size: 'large',
  }
];

function MemoryGallery() {
  const [activeMemory, setActiveMemory] = useState(null);

  const showPrevious = useCallback(() => {
    setActiveMemory((current) => {
      if (!current) return null;

      const index = memories.findIndex(
        (photo) => photo.id === current.id,
      );

      return memories[
        (index - 1 + memories.length) % memories.length
      ];
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveMemory((current) => {
      if (!current) return null;

      const index = memories.findIndex(
        (photo) => photo.id === current.id,
      );

      return memories[(index + 1) % memories.length];
    });
  }, []);

  return (
    <section id="memories" className={styles.gallery}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Наша історія"
          title="Спогади, що залишаються"
          description="Найцінніше часто ховається в простих моментах, які хочеться зберегти назавжди."
        />

        <div className={styles.grid}>
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`${styles.card} ${styles[memory.size]}`}
            >
              <PhotoCard
                src={memory.src}
                alt={memory.alt}
                title={memory.title}
                description={memory.description}
                index={index + 1}
                size={memory.size}
                onClick={() => setActiveMemory(memory)}
              />
            </div>
          ))}
        </div>

        <p className={styles.closingNote}>
          У кожної фотографії — своя історія.
        </p>
      </div>

      <PhotoLightbox
        photos={memories}
        activePhoto={activeMemory}
        onClose={() => setActiveMemory(null)}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </section>
  );
}

export default MemoryGallery;