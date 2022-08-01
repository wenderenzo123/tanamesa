import cardapio from 'data/cardapio.json';
import style from 'style/home.module.scss'

import Pages from 'components/menu';
export default function Home(){
    let pratos = [...cardapio];
    pratos = pratos.sort(() => 0.5 - Math.random()).splice(0,3);
    return(
        <section>
            <h3 className={style.titulo}>Recomendações</h3>
            <div className={style.recomendados}>
                {pratos.map(item=>(
                    <div key={item.id} className={style.recomendado}>
                        <div className={style.recomendado__imagem}>
                            <img src={item.photo} alt="foto" />
                        </div>
                        <button className={style.recomendado__botao}>Ver mais</button>
                    </div>
                ))}
            </div>
        </section>
    );
}