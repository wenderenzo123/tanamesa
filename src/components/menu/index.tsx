import style from '../../style/menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import {Link} from 'react-router-dom';
export default function Pages(){
    const rotas = [{
        label: 'Inicio',
        to: '/'
    },
    {
        label: 'Cardápio',
        to: '/Cardapio'
    }
    ,
    {
        label: 'Sobre',
        to: '/Sobre'
    }
    ];
    return(
        <nav className={style.menu}>
            <ul className={style.menu__list}>
                {rotas.map((rota,index)=> (
                    <li key={index} className={style.menu__link}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}