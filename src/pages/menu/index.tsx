import style from '../../style/menu.module.scss'
import React, { useState } from "react";

import Search from './search';
import Filtros from './filtros';
import Order from './order';
import Itens from './itens';
export default function Menu(){
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState('');
    return (
      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>Cardápio</h3>
        <Search busca={busca} setBusca={setBusca} />
        <div className={style.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltros={setFiltro} />
          <Order ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>

    )
}