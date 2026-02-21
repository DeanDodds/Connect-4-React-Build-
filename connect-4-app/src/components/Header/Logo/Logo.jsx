import style from './Logo.module.css';

export default function Logo() {
  return (
    <div className={style['logo-container']}>
      <div className={style['logo-red-circle']}></div>
      <div className={style['logo-yellow-circle']}></div>
      <div className={style['logo-red-circle']}></div>
      <div className={style['logo-yellow-circle']}></div>
    </div>
  );
}