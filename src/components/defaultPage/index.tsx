import style from '../../style/defaultPage.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}