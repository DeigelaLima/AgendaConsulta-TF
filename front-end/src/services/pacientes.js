import { api } from './config'

export default {
    getPaciente:(id)=>{
        return api.get(`/pacientes/${id}`)
    }
}