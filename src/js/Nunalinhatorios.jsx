import React from 'react'

export default props => {

    var nuns = '';

    for (var i = 0; i < 6; i++) {   
        if(i === 0 ){
            nuns = parseInt(Math.random()*(props.max - props.min))
        }else{
            nuns = nuns +','+ parseInt(Math.random()*(props.max - props.min))
        }       
    }
    
    return (

        <div>            
                <div>
                    <h1>Maior Valor: {props.max}</h1>
                    <h1>Menor Valor: {props.min}</h1>
                </div>

                <div>
                    <h1>Valores: {nuns}</h1>
                </div>
        </div>

    )
}