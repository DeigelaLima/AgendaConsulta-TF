<template>
  <div id="cadastro">
    <div id="form">
      <div class="text-center">
        <h1 class="green-text">Criar conta</h1>
      </div>
      <div id="logo" class="logo-img">
        <img src="../assets/images/logo.png"/>
      </div>
      <form id="frm">
        <div id="input-group-1" class="form-group">
          <label class="mt-3 green-text" for= "input-1">Nome</label>
          <input id="input-1" class="form-control" v-model="user.nome" type="text"
            placeholder="Digite seu nome completo"
            required
          />
        </div>
        <div id="input-group-1" class="form-group">
          <label class="mt-3 green-text" for= "input-1">Email</label>
          <input id="input-1" class="form-control" v-model="user.email" type="email"
            placeholder="Digite o seu email"
            required
          />
        </div>

        <div id="input-group-2" class="form-group mt-2">
          <label class="mt-2 green-text" for= "input-1">Senha</label>
          <input id="input-2" class="form-control" v-model="user.password" type="password"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <div id="input-group-2" class="form-group mt-2">
          <label class="mt-2 green-text" for= "input-1">Confirmação da senha</label>
          <input id="input-2" class="form-control" v-model="user.password" type="password"
            placeholder="Digite sua senha novamente"
            required
          />
        </div>

        <button id="btn-entrar" type="submit" class="green-text btn-success">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cadastro",
    data() {
      return {
        user: {
          nome: "", 
          email: "",
          password: ""
        },
        users: [
          {id: 0, login:"deigela", password:"123"},
          {id: 2, login:"andzika", password:"123"}
        ],
        userType: "Paciente",
        userTypeOptions: [
          {value: "Paciente", text: "Paciente"},
          {value: "Médico", text: "Médico"},
          {value: "Recepcionista", text: "Recepcionista"}
        ]
      }
    }
  }
  
</script>


<style >

*{
  font-family: Arial, Sans-serif, times;
}

#cadastro {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right,#fff, var(--primary));
  display: flex;
  align-items: center;
  justify-content: center;
}

#form-title{
  text-align: center;
}

.title{
  font-size: 15pt;
  margin-bottom: 20px;
}

.green-text{
  color: var(--primary);
  font-weight: bold;
}

.logo-img{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.logo-img img{
  border: 0;
  width: 120px;
  height: 80px;
}

#form{
  width: 33%;
  background-color: var(--background-default);
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 40px 15px 40px 15px;
  box-shadow: -18px -18px var(--primary);
}

#select-1:hover{
  cursor: pointer;
}

.text-center{
  width: 100%;
  text-align: center;
}

#btn-entrar{
  background-color: #fff;
  color: var(--secondary);
  width: 100%;
  height: 50px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 10px;
  border-radius: 7px;
}

#btn-entrar:hover{
  background-color: var(--secondary);
  color: #fff;
}

#link-cadastro{
  text-decoration: none;
}
</style>
