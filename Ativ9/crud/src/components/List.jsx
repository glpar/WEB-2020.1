import React, { Component } from 'react';
import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';

const ListPage = () => (
    <FirebaseContext.Consumer>
        {contexto => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplina: [], loading: false }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        this.setState({loading:true})
        this.ref = this.props.firebase.getFirestore().collection('disciplinas')
        this.ref.onSnapshot(this.alimentarDisciplinas.bind(this))
    }

    alimentarDisciplinas(query) {
        let disciplinas = []
        query.forEach(
            (doc) => {
                const { nome, curso, capacidade } = doc.data()
                disciplinas.push(
                    {
                        _id: doc.id,
                        nome,
                        curso,
                        capacidade,
                    }
                )
            }
        )
        this.setState({ disciplina: disciplinas, loading:false })
    }
    montarTabela() {
        if (!this.state.disciplina) return
        return this.state.disciplina.map(
            (discip, i) => {
                return <TableRow disciplina={discip} key={i}
                    apagarElementoPorId={this.apagarElementoPorId}
                    firebase={this.props.firebase}
                />;
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

    gerarConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td colSpan='6' style={{textAlign:"center"}}>
                        <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>
            )
        }
        else return this.montarTabela()
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
                        {this.gerarConteudo()}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default ListPage 