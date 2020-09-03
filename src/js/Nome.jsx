import React from 'react'

import Jogo from './Jogo'

export default props =>{

    const exit = props.jogo || 'Sem Vinculo'

    if(exit === 'Sem Vinculo' ){
        return (
            <div>
                <p>Nome:{props.nome} SobreNome:{props.sobrenome}</p>
            </div>
        )
    } else{
        return (
            <div>
                <Jogo nome='bluell'  jogo={exit}></Jogo>
                <Jogo nome='dudaa'   jogo="League"></Jogo>
                <Jogo nome='vredgui' jogo="Tibia"></Jogo>
            </div>
        )
    }   
    


}