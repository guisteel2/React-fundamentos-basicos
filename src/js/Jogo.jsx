import React from 'react'


export default props => {

    
    const margin = {
        marginTop: '10px'
    }

    return(
            <h1 style = {margin} >Nick:{props.nome} Jogo:{props.jogo}</h1>
    )

}