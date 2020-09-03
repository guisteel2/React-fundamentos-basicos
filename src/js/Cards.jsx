import React from 'react'
import '../css/Cards.css'


export default props => {
    
    // const cor = {backgroundColor: props.cores || '#006400'}
    return (

        <div style={{ borderRadius:'10px', backgroundColor: props.cores || '#006400'}}>
            <div className="card">
                <div className="Titulos">{props.titulo}</div>
                <div className="Content">{props.children}</div>    
            </div>


        </div>

    )
}