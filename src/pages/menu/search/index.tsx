import React, { SetStateAction } from "react";
import style from '../../../style/search.module.scss';
import {CgSearch} from 'react-icons/cg'
import Order from "../order";

export default function Search(Props:{busca:string,setBusca:React.Dispatch<SetStateAction<string>>}){

    return(
        <div className={style.buscador}>
            
            <input
                placeholder="Buscar"
                value={Props.busca} 
                onChange = {evento => Props.setBusca(evento.target.value)}/>
                <CgSearch size={20} color="#4C4D5E"/>
        </div>
        
    )
}