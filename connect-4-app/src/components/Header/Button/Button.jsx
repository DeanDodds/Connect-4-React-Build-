import style from './Button.module.css'

export default function Button({ children, onClick, ...props }) {

  return (
    <button  className={style['button']} onClick={onClick}>
      {children}
    </button>
  );
}