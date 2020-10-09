import React, { Component } from 'react'
import Card from './Card'
import './Soma.css'
import { connect } from 'react-redux'

class Soma extends Component {
    soma(){
        const nu2 = (parseInt(this.props.num2) + parseInt(this.props.num1))
        return nu2
    }
    render() {
        return (
            <Card title='Soma' >
                <div className='soma'>
                <input value={this.soma()} readOnly/>
                </div>
            </Card>
        )
    }
}
function mapStateToProps(state){
    return{
        num1: state.Number1.n1,
        num2: state.Number2.n2
        //nomeProfessor: state.dadosProfessor.nome,
        //pokemon: state.pokemonNames[1]
    }
}

export default connect(mapStateToProps)(Soma)