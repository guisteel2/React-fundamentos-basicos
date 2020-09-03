import React , {useState} from 'react'


export default props =>{

    const [Max , setMax] = useState(props.max || 60)
    const [Min , setMin] = useState(props.min || 0)
    const Qtde = props.qtde || 6

    const inicial = geraNumero(Qtde)
    const [Numero , setNumero] = useState(inicial)


    function geraNumero(qtde){


        if((parseInt(Min)+7) >= parseInt(Max)){
            const aux = parseInt(Min)+10
            setMax(aux)
        }
       
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const mi = parseInt(Min) || 0
                const ma = parseInt(Max) || 60

                const novoNumero = geralNumeroNaoigual(mi, ma, nums)
                return [ ...nums, novoNumero]
            } ,[])
            .sort((n1,n2) => n1 - n2)

            return numeros
    }

    function geralNumeroNaoigual(min, max, array){

        if((min+7) >= max){
            max = min+10
        }
     
        const aleatorio = parseInt(Math.random() * (max - min))+ min
        return array.includes(aleatorio) ? geralNumeroNaoigual(min, max, array) : aleatorio
        
    }

    function NovosArr(){

        setNumero(geraNumero(Qtde))
    }
   
    return(
            <div>

                <h1>Numeros entre {Min} e {Max} </h1>

                <h1>{Numero.join('-')}</h1>

                <div>
                    <input type="number"  onChange={_ => setMin(_.target.value)}  placeholder="Numero Min"></input>
                    <input type="number"  onChange={_ => setMax(_.target.value)}  placeholder="Numero Max"></input>
                </div>

                <button onClick={e => NovosArr()}>Geral Numeros</button>
                


            </div>
    )
}