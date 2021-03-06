import Login from '../views/Login.vue'
import PacienteHome from '../views/Paciente/PacienteHome.vue'
import PacienteCadastro from '../views/Cadastro.vue'
import PacienteEditarConsulta from '../views/Paciente/PacienteEditarConsulta.vue'
import PacienteHistorico from '../views/Paciente/PacienteHistorico.vue'
import PacienteVerMedicos from '../views/Paciente/PacienteVerMedicos.vue'
import MedicoHome from '../views/Medico/MedicoHome.vue'
import MedicoSolicitacoes from '../views/Medico/MedicoSolicitacoes.vue'
import PacienteAgendarConsulta from '../views/Paciente/PacienteAgendarConsulta.vue'
import PacienteSolicitacoes from '../views/Paciente/PacienteSolicitacoes.vue'
// Deigela e Stefane
export default [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/pacienteHome',
    name: 'PacienteHome',
    component: PacienteHome
  },
  {
    path: '/pacienteCadastro',
    name: 'Cadastro',
    component: PacienteCadastro
  },

  {
    path: '/paciente/minhasConsultas/edit/:id',
    name: 'pacienteEditarConsulta',
    component: PacienteEditarConsulta,
    params: true
  },
  {
    path: '/paciente/historicoConsultas',
    name: 'pacienteHistoricoConsultas',
    component: PacienteHistorico
  },
  {
    path: '/paciente/verMedicos',
    name: 'pacienteVerMedicos',
    component: PacienteVerMedicos
  },
  {
    path: '/paciente/agendarConsulta',
    name: 'pacienteAgendarConsulta',
    component: PacienteAgendarConsulta,
    params: true
  },
  {
    path: '/paciente/solicitacoes',
    name: 'pacienteSolicitacoes',
    component: PacienteSolicitacoes
  },
  {
    path: '/medicoHome',
    name: 'medicoHome',
    component: MedicoHome
  },
  {
    path: '/medico/solicitacoes',
    name: 'medicoSolicitcoes',
    component: MedicoSolicitacoes
  }
]