import styles from './SectionHeading.module.scss';

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  return (
    <div
      className={`${styles.heading} ${styles[align]} ${className}`}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>{eyebrow}</span>
      )}

      <span className={styles.decorativeLine} aria-hidden="true">
        <span className={styles.line} />
        <span className={styles.ornament}>✳</span>
        <span className={styles.line} />
      </span>

      <h2 className={styles.title}>{title}</h2>

      {description && (
        <p className={styles.description}>{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;