import React, {useState} from 'react';
import List from '../list/index';


const Gerador = ({ nome, prefixo, mudaUltimaSenha }) => {

    const [senhaAtual, setSenhaAtual] = useState(1);
    const [listaSenha, setListaSenha] = useState([]);
    //senhaAtual => variavel
    //setSenhaAtual => seta o valor de senhaAtual
    
    const geradorDeSenha = (pref) => {
        defineSenhaAtual();
        alert('Sua Senha é ' + pref + senhaAtual)
    }

    const defineSenhaAtual = () => {
        setSenhaAtual(senhaAtual + 1);
        setListaSenha(old => [...old, senhaAtual]);
        mudaUltimaSenha(prefixo + senhaAtual);
    }

    return(
        <div>
            <button onClick={() =>geradorDeSenha(prefixo)}
            >Gerar {nome}</button>
            <List prefixo={prefixo} lista={listaSenha}/>
        </div> 
    );
}

export default Gerador;