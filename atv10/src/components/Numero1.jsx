import React, { Component } from 'react'
import Card from './Card'
import './Numero1.css'
import { connect } from 'react-redux'
import {alterarNum1} from '../store/actions/number1ActionCreator'

class Numero1 extends Component {
    proximo(){
        const num1 = this.props.num1 + 1
        this.props.alterarN1(num1)
    }
    anterior(){
        const num1 = this.props.num1 - 1
        this.props.alterarN1(num1)
    }
    somar10(){
        const num1 = this.props.num1 + 10
        this.props.alterarN1(num1)
        
    }
    subtrair10(){
        const num1 = this.props.num1 - 10
        this.props.alterarN1(num1)
    }
    render() {
        return (
            <Card title={'Número 1'} >
                <div className='numero1'>
                    <button className='btn btn-secondary' onClick={()=> this.subtrair10()}>
                        -10
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.anterior()}>
                        Anterior
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.proximo()}>
                        Próximo
                    </button>
                    <button className='btn btn-secondary' onClick={()=> this.somar10()}>
                        +10
                    </button>
                    <input value={this.props.num1} readOnly/>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        num1: state.Number1.n1
        //nomeProfessor: state.dadosProfessor.nome,
        //pokemon: state.pokemonNames[1]
    }
}

function mapActionCreatorToProps(dispatch){
    return{
        alterarN1(num1){
            const action= alterarNum1(num1)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapActionCreatorToProps)(Numero1)