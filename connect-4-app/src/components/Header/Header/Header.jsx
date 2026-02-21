import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import style from './Header.module.css';

export default function Header() {

  return (  
    <header>
        <div className={style['header-container']}>
            <Button>Menu</Button>
            <Logo />         
            <Button>Restart</Button>
        </div>
    </header>
  );
}