import { useState } from 'react';
import styles from '../../../style/order.module.scss';
import order from './opcoes.json';
import classNames from 'classnames';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

interface Props{
    ordenador:string;
    setOrdenador:React.Dispatch<React.SetStateAction<string>>;
}
export default function Order(props: Props){
    const [open,setOpen]= useState(false);
    const nomeOrdenador = props.ordenador && order.find(opcao=> opcao.value===props.ordenador)?.nome;

    return (
        <button className={classNames({
            [styles.ordenador]:true,
            [styles["ordenador--ativo"]]:props.ordenador!==""
         })}
        onClick={()=>setOpen(!open)}
        onBlur={()=>setOpen(false)}>
            <span >
                {nomeOrdenador||"Ordenar por"} 
                {open?<MdKeyboardArrowUp size={20}/>:
                <MdKeyboardArrowDown size={20}/>}
            </span>
            <div className={classNames({
                [styles.ordenador__options]:true,
                [styles["ordenador__options--ativo"]]:open
                })}>
                {order.map(opcao=>(
                    <div className={styles.ordenador__option} key={opcao.value} onClick={()=>props.setOrdenador(opcao.value)}>
                        {opcao.nome}
                    </div>
            )
            )}
            </div>
        </button>
    )
}