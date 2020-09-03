import React from 'react'
import produtos from '../data/produtos'


export default props => {
    
    var cb = props.chave || 0

    const  aux2 = funcao(cb)

    function funcao(valor){

        const aux =  parseInt(Math.random() * (4 - 0))+ 0

        if(valor === aux){
            return funcao(valor)      
        }else{
            return aux
        }
    }
  
    if(aux2){
        cb = aux2
    }

   

    
    return (
            <div>
                <div>
                    <button chave={produtos[aux2].id}  onClick = { _=> props.quandoclicar(produtos[aux2].id,produtos[aux2].nome, produtos[aux2].preco, cb)  }  > Mudar Produto</button>
                </div>
            </div>
    
    )
   
    

}