import React from 'react'


export default function Comparametro(props){

    const Nota = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    const Suanota = Math.ceil(props.nota)

    return (
        <h1>
            Ola : {props.nome}, Você foi : {Nota} Nota: {Suanota}
        </h1>
    )

}