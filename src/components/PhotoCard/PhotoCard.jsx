import styles from './PhotoCard.module.scss';

function PhotoCard({
  src,
  alt,
  title,
  description,
  index,
  size = 'medium',
  onClick,
}) {
  const number = String(index ?? 1).padStart(2, '0');

  return (
    <button
      type="button"
      className={`${styles.card} ${styles[size] ?? styles.medium}`}
      onClick={onClick}
      aria-label={`Відкрити фото: ${title || alt}`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={src}
          alt={alt || ''}
          className={styles.image}
          loading="lazy"
        />

        <span className={styles.number} aria-hidden="true">
          {number}
        </span>

        <span className={styles.expandIcon} aria-hidden="true">
          ↗
        </span>
      </div>

      {(title || description) && (
        <div className={styles.caption}>
          {title && <h3 className={styles.title}>{title}</h3>}

          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      )}
    </button>
  );
}

export default PhotoCard;