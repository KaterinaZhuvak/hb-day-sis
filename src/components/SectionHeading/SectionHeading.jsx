import styles from './SectionHeading.module.scss';

function SectionHeading({
  eyebrow,
  title,
  description,
  number,
  align = 'center',
  className = '',
}) {
  return (
    <div
      className={`${styles.heading} ${styles[align]} ${className}`}
    >
      <div className={styles.intro}>
        <span className={styles.sideLine} aria-hidden="true" />

        <span className={styles.eyebrow}>
          {eyebrow || 'З любов’ю для тебе'}
        </span>

        <span className={styles.sideLine} aria-hidden="true" />
      </div>

      <div className={styles.titleRow}>
        {number && (
          <span className={styles.number} aria-hidden="true">
            {String(number).padStart(2, '0')}
          </span>
        )}

        <h2 className={styles.title}>{title}</h2>
      </div>

      {description && (
        <p className={styles.description}>{description}</p>
      )}

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerLine} />
        <span className={styles.dividerFlower}>✿</span>
        <span className={styles.dividerLine} />
      </div>
    </div>
  );
}

export default SectionHeading;
