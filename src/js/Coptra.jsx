import React from 'react'
//import Copia from './Coptre'


export default props => {

    return (
            
        <div>
           {React.cloneElement(props.children,props)}
        </div>
    )



}