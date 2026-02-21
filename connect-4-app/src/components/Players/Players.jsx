import styles from './Players.module.css';
import imageUrl from '../../../public/connect-emoji.png';

export default function Players({ children, player, active}) {

  return (
        <div className={`${styles['player']} player ${active ? styles['active'] : ''}`}>
            <p>player <span>0</span></p>
            <div className={`${styles['player-image-container']} player-image-container`}>
                <img src={imageUrl} alt="Player emoji" />
            </div>
        </div>
  )
}