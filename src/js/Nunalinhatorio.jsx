import React from 'react'

export default props => {
    
    return (

        <div>
            <div className="titulo">{props.titulo}</div>
            
            <div>
                <h1>Maximo: {props.max}</h1>
                <h1>Minimo: {props.min}</h1>
            </div>

            <div>
                <h1>Valor Sorteado:{parseInt(Math.random()*(props.max - props.min))}</h1>
            </div>
        </div>

    )
}