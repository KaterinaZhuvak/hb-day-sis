import { useEffect } from 'react';
import styles from './PhotoLightbox.module.scss';

function PhotoLightbox({
  photos,
  activePhoto,
  onClose,
  onPrevious,
  onNext,
}) {
  useEffect(() => {
    if (!activePhoto) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrevious();
      if (event.key === 'ArrowRight') onNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activePhoto, onClose, onPrevious, onNext]);

  if (!activePhoto) return null;

  const currentIndex = photos.findIndex(
    (photo) => photo.id === activePhoto.id,
  );

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Перегляд фотографії"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className={`${styles.button} ${styles.close}`}
        onClick={onClose}
        aria-label="Закрити перегляд"
      >
        <span aria-hidden="true">×</span>
      </button>

      <button
        type="button"
        className={`${styles.button} ${styles.previous}`}
        onClick={onPrevious}
        aria-label="Попередня фотографія"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <figure className={styles.figure}>
        <div className={styles.imageFrame}>
          <img
            key={activePhoto.id}
            className={styles.image}
            src={activePhoto.src}
            alt={activePhoto.alt || activePhoto.title || ''}
          />
        </div>

        <figcaption className={styles.caption}>
          <span className={styles.counter}>
            {String(currentIndex + 1).padStart(2, '0')}
            <span className={styles.counterDivider}> / </span>
            {String(photos.length).padStart(2, '0')}
          </span>

          {activePhoto.title && (
            <h2 className={styles.title}>{activePhoto.title}</h2>
          )}

          {activePhoto.description && (
            <p className={styles.description}>
              {activePhoto.description}
            </p>
          )}
        </figcaption>
      </figure>

      <button
        type="button"
        className={`${styles.button} ${styles.next}`}
        onClick={onNext}
        aria-label="Наступна фотографія"
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}

export default PhotoLightbox;