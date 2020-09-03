import React from 'react'


export default (props) => {
    return(
            <div>
                <input  id="somador" 
                        type="number" 
                        placeholder="Digite N/P Somar" 
                        onChange={e => props.func(e.target.value)} 
                ></input>
            </div>)
}