import React from 'react'

export default props => {
    return(
            <div>
                <button onClick={props.funcMax}>+</button>
                <button onClick={props.funcMin}>-</button>
            </div>
        )
}