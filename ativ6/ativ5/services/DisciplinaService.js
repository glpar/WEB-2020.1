const DisciplinaModel = require('../models/DisciplinaModel')

let disciplinas = [
    {_id:0,nome:'Claudinho',curso:'Mecânico',capacidade:50},
    {_id:1,nome:'Manoel do Monobloco',curso:'Audiovisual',capacidade:33},
    {_id:2,nome:'Jorginho Chicleteiro',curso:'Contabilidade',capacidade:17}
]
let _id = 3

class DisciplinaService {

    static register(data) {
        let disciplina = new DisciplinaModel(
            _id++,
            data.nome,
            data.curso,
            data.capacidade
        )
        disciplinas.push(disciplina)
        return disciplina;
    }
    static list() {
        return disciplinas;
    }
    static update(_id, data) {
        for (let d of disciplinas) {
            if (d._id == _id) {
                d.nome = data.nome
                d.curso = data.curso
                d.capacidade = data.capacidade
                return d;
            }
        }
        return null;
    }
    static delete(_id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i]._id == _id) {
                disciplinas.splice(i, 1)
                return true;
            }
        }
        return false;
    }
    static retrieve(_id) {

        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i]._id == _id) {
                return disciplinas[i];
            }
        }
        return {};
    }

}
module.exports = DisciplinaService