import React,{ useState } from 'react'

export default prop => {

    const [Digitado,setDigitado] = useState('Imput teste')

    const texto = Digitado === '' ? 'Imput' : Digitado

    function mudar(e){
        setDigitado( e.target.value )
    }

    return (
            <div>
                <div style={{ width: 'auto'  }}>
                    <h1 >{Digitado}</h1>
                </div>
                <div style={{ display:'flex', flexDirection:'column', textAlign: 'center'}}>
                    <input value={Digitado} onChange = {mudar}></input>
                    <input value={Digitado} ></input>
                    <input value={undefined}></input>
                </div>
                 
            </div>
            )
}