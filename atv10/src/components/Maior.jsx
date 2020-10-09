import React, { Component } from 'react'
import Card from './Card'
import './Maior.css'
import { connect } from 'react-redux'

class Maior extends Component {
    maior(){
        if(parseInt(this.props.num2)>parseInt(this.props.num1)){
            const nu2 = parseInt(this.props.num2);
            return nu2
        }
        else if(parseInt(this.props.num2)<parseInt(this.props.num1)){
            const nu2 = parseInt(this.props.num1)
            return nu2
        }   
        else if(parseInt(this.props.num2)===parseInt(this.props.num1)){
            const nu2 = parseInt(this.props.num2)
            return nu2
        }
    }
    render() {
        return (
            <Card title='Maior' >
                <div className='maior'>
                <input value={this.maior()} readOnly/>
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

export default connect(mapStateToProps)(Maior)