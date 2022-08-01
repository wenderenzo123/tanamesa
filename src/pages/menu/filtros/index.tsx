import filtros from './filtro.json'
import styles from '../../../style/filter.module.scss'
import classNames from 'classnames'
import Order from '../order';

interface Filter{
    filtro: number|null;
    setFiltros: React.Dispatch<React.SetStateAction<number | null>>;
}
interface Opcao{
    id: number;
    label: string;
}
export default function Filtros({filtro,setFiltros}:Filter){
    function selecionarFiltro(opcao:Opcao){
        if(filtro === opcao.id){
            return setFiltros(null);
        } 
        return (
            setFiltros(opcao.id)
        );
    }
    return (
        <div className={styles.filtros} >
            {filtros.map(opcao => (
                <button className={classNames({
                    [styles.filtros__filtro]:true,
                    [styles['filtros__filtro--ativo']]:filtro===opcao.id

                })} key={opcao.id} onClick={()=>selecionarFiltro(opcao)}>
                   {opcao.label}
                </button>
            ))}
            
        </div>
    )
}