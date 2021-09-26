import React, {useState} from 'react';
import Gerador from '../components/gerador';
import {Link} from 'react-router-dom';



const Home = ({filaAtual, adicionaFila}) =>  {

    
    const mudaFilaAtual = (novoLetreiro) => {
        adicionaFila(novoLetreiro);
    }
  
    return (
<div className="App">
    
        <Gerador nome={"Fila com prioridade"} 
                prefixo={"CXN"} 
                mudaUltimaSenha={(res) => mudaFilaAtual(res)}
        />
        
        <Gerador nome={"Fila sem prioridade"}
                prefixo={"CXP"} 
                mudaUltimaSenha={(res) => mudaFilaAtual(res)}
         />

        <Link to={"/client"}>Volta pro cliente</Link>
</div> 

);
}

export default Home;