import React,{ Component } from 'react'

class Contador extends Component {
    state = {
        numero : +this.props.numero,
        psoma : +this.props.cal
    }


    iniMax = () => {
        this.setState({
            numero: this.state.psoma + this.state.numero 
        })
    }

    iniMin = () => {
        this.setState({
            numero: this.state.numero -this.state.psoma
        })
    }

    iniInp = (e) => {
        this.setState({
            numero: +e.target.value*1
        })
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <h2>N:{this.state.numero}</h2>
                <button onClick={this.iniMax}>+</button>
                <button onClick={this.iniMin}>-</button>
                <input type="number" value={this.state.numero} onChange={this.iniInp} ></input>
            </div>
        )
    }
}


export default Contador