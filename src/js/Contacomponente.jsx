import React,{ Component } from 'react'
import Botao from '../Compontes/Button'
import Display from '../Compontes/Display'
import Campo from '../Compontes/Input'

class Contacomponente extends Component {

    state = {
        numero:this.props.numero,
        soma:this.props.soma,
    }


    Soma = (Contador) => {

        if(Contador === ''){
            this.setState({
                soma:  0
            })
        }else{
            this.setState({
                soma:  Contador
            })
        }
    
        
    }

    Max = () =>{
        
        if(this.state.soma){

            var m = (this.state.numero.toString() *1) + (this.state.soma * 1)

            this.setState({

                numero: m.toString(),
            })
        }else{
            alert('Por favor digitar um numero')
        }
        
    }

    Min = () =>{    

        const returnSoma = 0

        if(this.state.soma){
            var t = (this.state.numero.toString() *1) - (this.state.soma.toString() * 1)
        
            this.setState({
                numero: t.toString(),
            })
        }else{
            alert('Por favor digitar um numero')
        }
   
    }

  


    render(){
        return(
                <div>
                    
                    <Display soma={this.state.numero}></Display>
                    <Campo func={this.Soma}></Campo>
                    <Botao funcMax={this.Max} funcMin={this.Min} ></Botao>

                </div>)
        }

}



export default Contacomponente


