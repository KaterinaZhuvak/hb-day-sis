
import styles from './PhotoLightbox.module.scss';

function PhotoLightbox({ memory, onClose }) {
  if (!memory) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.lightbox}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        className={styles.content}
        role="dialog"
        aria-modal="true"
        aria-label={memory.title}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрити фотографію"
        >
          ×
        </button>

        <img
          src={memory.image}
          alt={memory.alt}
          className={styles.image}
        />

        <div className={styles.caption}>
          <h3>{memory.title}</h3>
          {memory.caption && <p>{memory.caption}</p>}
        </div>
      </div>
    </div>
  );
}

export default PhotoLightbox;
