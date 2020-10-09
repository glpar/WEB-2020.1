import React, { Component } from 'react'
import Card from './Card'
import './Numero2.css'
import { connect } from 'react-redux'
import {alterarNum2} from '../store/actions/number2ActionCreator'

class Numero2 extends Component {
    proximo(){
        const num2 = this.props.num2 + 1
        this.props.alterarN2(num2)
    }
    anterior(){
        const num2 = this.props.num2 - 1
        this.props.alterarN2(num2)
    }
    somar10(){
        const num2 = this.props.num2 + 10
        this.props.alterarN2(num2)
        
    }
    subtrair10(){
        const num2 = this.props.num2 - 10
        this.props.alterarN2(num2)
    }
    render() {
        return (
            <Card title={'Número 2'} >
                <div className='numero2'>
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
                    <input value={this.props.num2} readOnly/>
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state){
    return{
        num2: state.Number2.n2
        //nomeProfessor: state.dadosProfessor.nome,
        //pokemon: state.pokemonNames[1]
    }
}

function mapActionCreatorToProps(dispatch){
    return{
        alterarN2(num2){
            const action= alterarNum2(num2)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapActionCreatorToProps)(Numero2)