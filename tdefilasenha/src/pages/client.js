import React from 'react';
import {Link} from 'react-router-dom';
import Letreiro from '../components/letreiro';
import ProxAtend from '../components/proxAtend';

const Client = ({filaAtual, removePrimeiroDaFila}) => {

        const atualizaFila = () => {
            removePrimeiroDaFila()            
        }

    return (<div>
        <Letreiro letreiroAtual = {filaAtual ? filaAtual[0] : ''}/>
        <Letreiro letreiroAtual = {filaAtual ? filaAtual[1] : ''}/>
        <ProxAtend numCaixa="Caixa 1" chamarProximo={() => atualizaFila()}/>
        <ProxAtend numCaixa="Caixa 2"/>
        <Link to={"/home"}>Volta pra home</Link>
    </div>);
}
export default Client;