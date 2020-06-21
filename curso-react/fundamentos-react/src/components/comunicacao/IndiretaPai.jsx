import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default () => {
    
    //const [a, b] = [1, 2]

    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);
        
    // nomne idade nerd
    function fornecerInformacoes(nome, idade, nerd) {
            setNome(nome);
            setIdade(idade);
            setNerd(nerd);    
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}

