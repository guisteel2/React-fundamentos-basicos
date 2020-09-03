import React from 'react'
import If,{Else} from '../condicao/If'


export default (props) =>{
    
    //console.log(props)
    const usuario = props.usuario || {}
 
    const testando = <If test = { usuario && usuario.nome }>
                        (X)
                        <Else>
                        (0)
                        </Else>
                    </If>

    return(
        <div style={{border:'1px solid',marginLeft:'10px'}}> 
            <h1>Testando  {testando} </h1>
        </div>
    )
}