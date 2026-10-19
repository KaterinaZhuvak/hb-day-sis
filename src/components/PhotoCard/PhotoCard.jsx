
import styles from './PhotoCard.module.scss';

function PhotoCard({
  memory,
  onClick,
  className = '',
}) {
  const {
    image,
    alt,
    title,
    caption,
  } = memory;

  return (
    <button
      type="button"
      className={`${styles.card} ${className}`}
      onClick={onClick}
      aria-label={`Відкрити спогад: ${title}`}
    >
      <span className={styles.photoFrame}>
        <img
          src={image}
          alt={alt}
          className={styles.photo}
          loading="lazy"
        />

        <span
          className={styles.photoDecoration}
          aria-hidden="true"
        >
          ✿
        </span>
      </span>

      <span className={styles.cardTitle}>
        {title}
      </span>

      {caption && (
        <span className={styles.cardCaption}>
          {caption}
        </span>
      )}
    </button>
  );
}

export default PhotoCard;
