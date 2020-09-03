import '../css/Tabprod.css'
import React from 'react'
import produtos from '../data/produtos'


export default () =>{

    // const thprodutos = produtos.map(produtos =>{
    //     return(
    //         <tr>
    //             <td>{produtos.id}</td>
    //             <td>{produtos.nome}</td>
    //             <td>{produtos.preco}</td>
    //         </tr>
    //     )
    // })

    //ou

    function getProdutos(){
        return produtos.map((produtos, i) =>{
            return(
                <tr key={produtos.id} 
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produtos.id}</td>
                    <td>{produtos.nome}</td>
                    <td>R$ {produtos.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }

    return (

        <div className="TabProd">
            <table border= "1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {getProdutos()}
                </tbody>
            </table>
        </div>




    )




}