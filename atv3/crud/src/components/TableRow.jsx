import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class TableRow extends Component {

    constructor(props) {
        super(props)
        this.apagar = this.apagar.bind(this)
    }

    apagar() {
        axios.delete('http://localhost:3001/disciplina/' + this.props.disciplina.id)
            .then(
                (res) => {
                    console.log('Registro apagado')
                    this.props.apagarElementoPorId(this.props.disciplina.id)

                })
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <tr>
                <th scope="row">
                    {this.props.disciplina.id}
                </th>
                <td>
                    {this.props.disciplina.nome}
                </td>
                <td>
                    {this.props.disciplina.curso}
                </td>
                <td>
                    {this.props.disciplina.capacidade}
                </td>
                <td style={{ textAlign: "center" }}>
                    <Link to={"/edit/" + this.props.disciplina.id} className="btn btn-primary">Editar</Link>
                </td>
                <td style={{ textAlign: "center" }}>
                    <button onClick={this.apagar} className="btn btn-danger">Apagar</button>
                </td>
            </tr>
        )
    }
}