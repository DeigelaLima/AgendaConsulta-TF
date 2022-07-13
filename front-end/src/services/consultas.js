import { api } from './config'

export default {
    listarPorPaciente:(pacienteId) => {
        return api.get(`consultas/${pacienteId}`)
    },

    listarPorMedico:(medicoId) => {
        return api.get(`consultas${medicoId}`)
    },
    excluir:(id)=>{
        return api.get(`removeconsulta/${id}`)
    },
    atualizar:(consulta)=>{
        return api.post('updateconsulta',consulta)
    },
    cadastrar:(consulta)=>{
        return api.post('consulta',consulta)
    }
}