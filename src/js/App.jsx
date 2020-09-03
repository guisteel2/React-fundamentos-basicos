//import ReactDom from 'react-dom'
import React from 'react'
import Primeiro from './Primeiro'
import Comparametro from './Comparametro'
import Cards from './Cards'
import Nunalinhatorio from './Nunalinhatorio'
import Nunalinhatorios from './Nunalinhatorios'
import Nome from './Nome'
import Coptra from './Coptra'
import Coptre from './Coptre'
import Familia from './Familia'
import Replista from './Replista'
import Listaproduto from './Listaprodutos'
import Condcomponentes from './Condcomponentes'
import Redirecionamento from './Redirecionamento'
import ComponentesControlado from './ComponentesControlado'
import Contador from './Contador'
import Contacomponente from './Contacomponente'
import Contamega from '../ContadorMega/Contamega'



export default (props) => {

        //const { max=10 , min=0 } = props

        const beckgroun = {
            backgroundColor: 'black' 
        }


        return(

            <div className="app" style={beckgroun}>

                <Cards titulo="Numeros Alinhatorios/Mega">
                  <Contamega></Contamega>
                </Cards>

                <Cards titulo="classe e funcoes">
                    <Contacomponente numero='0' result='0' ></Contacomponente>
                </Cards>
                
                <Cards titulo="Contador Usando Classe">
                    <Contador cal='1' numero='1' ></Contador>
                </Cards>

                <Cards titulo="Componentes Controlado">
                    <ComponentesControlado></ComponentesControlado>
                </Cards>

                <Cards titulo="Redirecionamento de Props">
                    <Redirecionamento produto="mudjong"></Redirecionamento>
                </Cards>

                <Cards titulo=" Renderizacao condicional c/ componentes ">
                    <Condcomponentes usuario={{nome:"Test"}}></Condcomponentes>
                    <Condcomponentes usuario={{email:"Test@.."}}></Condcomponentes>
                </Cards>

                <Cards titulo="Lista de produtos">
                    <Listaproduto></Listaproduto>
                </Cards>

                <Cards  titulo="Repetição de Array">
                    <Replista></Replista>
                </Cards>

                <Cards titulo="Familia" >
                    <Familia sobrenome="Alves">
                        <Nome nome="guilherme"></Nome>
                        <Nome nome="Eduarda"></Nome>
                    </Familia>
                </Cards>

                <Cards titulo="Copia de chamada" cores ="#DCDCDC">
                    <Coptra  desc="copia">
                        <Coptre  nome="CopiaElement"></Coptre>
                    </Coptra> 
                </Cards>

                <Cards titulo="Envio simples, 3 modos" cores ="#DCDCDC">
                    <Nome jogo="League"></Nome>
                </Cards>

                <Cards titulo="Numeros Alinhatorios">
                    <Nunalinhatorios max='60' min='0'></Nunalinhatorios>
                </Cards>

                <Cards titulo="Numero Alinhatorio">
                    <Nunalinhatorio max='60' min='0'></Nunalinhatorio>
                </Cards>

                <Cards titulo="Verificação de Nota">
                    <Comparametro nome='Gui' nota="8.4"></Comparametro>
                </Cards>

                <Cards titulo="Primeiro Componente">
                    <Primeiro></Primeiro>
                </Cards>
                {/* <div class="app" style={{backgroundColor: 'red' }}>.</div> */}
            </div>
        )
}
