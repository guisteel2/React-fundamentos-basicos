import React, { useState } from 'react'
import produtos from '../data/produtos'
import ButtonProduto from './ButtonProduto'

export default props => {

    const [id,setId]        = useState(props.id)
    const [nome,setNome]    = useState(props.produto)
    const [preco,setPreco]  = useState(props.preco)
    

    function trocarProduto(id, nome, preco){ 
        setId(id)
        setNome(nome)
        setPreco(preco)
    }


    //metodo simple apenas para 4 consulta pos cria div com . nesse caso "mas serve para poder por varias condiçoes"
    //Utilizando muita função

    const Prodid = produtos.map((child , i) =>
        {
            if(props.produto === child.nome){
                return child.id  
        }
                                       
    })

    const ProdNome = produtos.map((child , i) =>{
        if(props.produto === child.nome){
            return child.nome  
        }                                     
    })

    const Prodpreco = produtos.map((child , i) =>{
        if(props.produto === child.nome){
            return child.preco  
        }                                      
    })


    return(
        <div>
            <div>
                <h1>Id Produto:{id  ? id : Prodid}</h1>
                <h1>Produto: {nome ? nome : ProdNome }</h1>
                <h1>R$  { preco ? preco : Prodpreco }</h1>
                <ButtonProduto chave={id} quandoclicar={trocarProduto}></ButtonProduto>
            </div>
            
        </div>  
        
        
    )



}