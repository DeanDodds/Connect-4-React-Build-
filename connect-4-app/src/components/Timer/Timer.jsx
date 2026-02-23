import styles from './Timer.module.css';

export default function Timer({ label = "PLAYER 1'S TURN", time = 15 }) {
  return (
    <>
    <div className={styles.timer}>
      <div className={styles.body}>
        <p className={styles.label}>{label}</p>
        <span className={styles.time}>{time}s</span>
      </div>
    </div>
    <div className={styles['bottom-border-div']}></div>
  </>
  );
}