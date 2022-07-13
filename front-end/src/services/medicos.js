import { api } from './config'

export default {
  listar:()=>{
    return api.get('/medicos')
  },
  getMedico:(id)=>{
    return api.get(`/medicos/${id}`)
  }
}