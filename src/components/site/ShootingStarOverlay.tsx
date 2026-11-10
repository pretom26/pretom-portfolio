
import styles from './ShootingStarOverlay.module.css'

export function ShootingStarOverlay() {
  return (
    <div aria-hidden='true' className={styles.overlay}>
      <span className={`${styles.meteor} ${styles.meteorOne}`} />
      <span className={`${styles.meteor} ${styles.meteorTwo}`} />
    </div>
  )
}
