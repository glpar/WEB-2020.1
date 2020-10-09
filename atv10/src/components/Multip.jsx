import React, { Component } from 'react'
import Card from './Card'
import './Multip.css'
import { connect } from 'react-redux'

class Multip extends Component {
    multi(){
        const nu2 = (parseInt(this.props.num2) * parseInt(this.props.num1))
        return nu2
    }
    render() {
        return (
            <Card title='Multiplicação' >
                <div className='multi'>
                <input value={this.multi()} readOnly/>
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

export default connect(mapStateToProps)(Multip)