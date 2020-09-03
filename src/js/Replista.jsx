import React from 'react'
import user from '../data/nomes'


export default() => {
    
    // metodo simples
    // const useres = (
    //     <li key={user[0].id}>
    //         {user[0].id}
    //     </li>
    // )
    

    const listauser = user.map((user) => {
        return (
            <li key={user.id}>Id:{user.id} -- Nome:{user.nome} -- Usuario:{user.id}
            </li>
        )
    })

    return(
        <div>
            <ul style={{listStyle: 'none' , fontFamily : 'fantasy'}}>
                {listauser}
            </ul>
        </div>
    )
}