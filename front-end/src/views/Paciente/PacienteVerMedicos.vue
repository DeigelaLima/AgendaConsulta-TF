<template>
  <div id="pacienteVerMedicos">
    <NavbarPaciente/>
    <div class="barra-pesquisa">
      <form class="filtros">
        <span class="filtro mess">Selecionar filtros</span>
        <select class="filtro" v-model="filter.especialidade" >
          <option :value="null">Selecione a especialidade</option>
          <option v-for="(esp,index) in especialidades" :key="index" :value="esp">{{esp}}</option>
        </select>
        <select class="filtro" v-model="filter.estado">
          <option :value="null">UF</option>
          <option v-for="(estado,index) in estados" :key="index">{{estado}}</option>
        </select>
        <input class="filtro" type="text" placeholder="Cidade" v-model="filter.cidade"/>
      </form>
    </div>
    <div class="principal">
      <h2>Médicos</h2>
      <h4 v-if="showMessage">Selecione todos os filtros para exibir os médicos</h4>
      <ul class="lista">
        <li class="item" v-for="med in medicos" :key="med.id">
          <span class="atributo"><b>Nome</b>: {{med.nome}}</span>
          <span class="atributo"><b>Local</b>: {{med.city}}-{{med.state}}</span>
          <span class="atributo"><b>Especialidade:</b> {{med.areaOfOcupation}}</span>
          <span class="atributo"><b>Preço por consulta:</b> R$ {{med.preco}},00</span>
          <router-link :to="{name: 'pacienteAgendarConsulta', params:{id:med.id ,medicId: med.id, price: med.preco, medicName: med.name+' '+med.lastName} }" >
            <button class="btn-primary">Agendar Consulta</button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import NavbarPaciente from '../../components/NavbarPaciente/NavbarPaciente.vue'
// import Medico from '../../services/medicos'
// import Pacientes from '../../services/pacientes'
import { api } from '../../services/config'

export default {
  data(){
    return{
      medicos: [],
      pacienteLogado: {},
      filter: {
        especialidade: null,
        estado: null,
        cidade: null
        },
      especialidades: ['Ortopedia','Pediatria','Dermatologia','Geriatria'],
      estados: ['CE','SP','AM'],
      showMessage: true
    }
  },
  mounted(){
    // Medico.listar().then(res => {
    //   console.log(res.data)
    //   this.medicos = res.data.data 
    //   console.log(this.medicos)
    // }),
    // Pacientes.getPaciente(1).then(res => {
    //   this.pacienteLogado = res.data.data[0]
    // })
    api.get('/medicos')
    .then((response) => {
      console.log(response.data)
      this.medicos = response.data.data
      console.log(response.data.data)
    }).catch(error => {
       console.log(error)
    })
  },
  components:{
    NavbarPaciente
  },
  methods:{
    filtraMedicos(){
      let res =  this.medicos.filter(e => {
        if(this.filter.especialidade !== null && this.filter.especialidade !== undefined)
          return ( e.areaOfOcupation.toLowerCase() === this.filter.especialidade.toLowerCase() )
        else
          return false
      }).filter(e => {
        if(this.filter.estado !== null && this.filter.estado !== undefined)
          return ( e.state.toLowerCase() === this.filter.estado.toLowerCase() )
        else
          return false
      }).filter(e => {
        if(this.filter.cidade !== null && this.filter.cidade !== undefined && this.filter.cidade !== '' )
          return ( e.city.toLowerCase().includes(this.filter.cidade.toLowerCase()) )
        else
          return false
      })
      this.showMessage = !(res.length > 0)
      return res
    }
  }
}
</script>

<style>

*{
  font-family: Arial, Sans-serif, times;
}

#pacienteVerMedicos {
  width: 100vw;
  height: 100vh;
  background-color:  var(--primary);
}

.mess{
  color: #fff;
  font-weight: bold;
  font-size: 15pt;
}

.filtros{

  display: inline-block;
  margin-top:10px;
  margin-left: 30px;
}

.filtro{
  max-width: 20vw;
  height: 6vh;
  margin-right:10px ;
}

h2{
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 30px;
}

h4 {
  color: rgb(211, 29, 29);
  font-weight: bold;
  margin-left: 30px;
}

.lista{
  margin-top: 20px;
}

.item{
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #cae05a;
  padding: 10px;
  list-style: none;
  margin: 10px 30px 0px 0px;
}

.atributo{
  margin-right: 30px;
}

.btn-success{
  width: 300px;
  border-radius: 5px;
}

</style>