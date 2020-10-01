import React, { Component } from 'react';
import axios from 'axios'
import TableRow from './TableRow';

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplina: [] }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3002/disciplinas/list')
        /*axios.get('http://localhost:3001/disciplina')*/
            .then(
                (res) => {
                    this.setState({ disciplina: res.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }
    montarTabela() {
        if (!this.state.disciplina) return
        return this.state.disciplina.map(
            (discip, i) => {
                return <TableRow disciplina={discip} key={i} apagarElementoPorId={this.apagarElementoPorId}/>;
            }
        )
    }
    apagarElementoPorId(id) {
        let discipTemp = this.state.disciplina
        for (let i = 0; i < discipTemp.length; i++) {
            if (discipTemp[i]._id === id) {
                discipTemp.splice(i, 1)
            }
        }
        this.setState({ disciplina: discipTemp })
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar Disciplinas</h3>
                <table class="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Capacidade</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>Ação</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>

                </table>
            </div>
        )
    }
}