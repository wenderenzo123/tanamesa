import style from '../../../../style/itens.module.scss'
import classNames from 'classnames'
interface ItemProps{
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {
        id: number;
        label: string;
    };
}
export default function Item(props: ItemProps){
    return(
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={props.photo} alt="Logo" />
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className={style.item__tags}>
                <div className={classNames({
                    [style.item__tipo]:true,
                    [style[`item__tipo__${props.category.label.toLowerCase()}`]]:true
                    })}>
                    {props.category.label}
                </div>
                <div className={style.item__porcao}>
                    {props.size}g
                </div>
                <div className={style.item__qtdpessoas}>
                    Serve {props.serving} pessoa(s)
                </div>
                <div className={style.item__valor}>
                    R$ {props.price}
                </div>
            </div>
            </div>
            
        </div>
    )
}