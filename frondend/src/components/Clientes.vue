<template>
  <div class="Apidoc">
    <div class="texto">
    <h1>Clientes Registrados</h1>
    <h3>Banco Mysql</h3>
    <div v-if="this.mysql" class="conteiner" >
            <div  v-for="item in this.mysql" :key="item.message" class="card" >
              <div class="textInfo">
              <p><b>id:</b> {{ item.id}}
              <b>nome:</b> {{ item.nome}}
              <b>telefone:</b> {{ item.celular }}</p>  
              </div>
            </div>
        </div>
    <h3>Banco Postgres</h3>
    <div v-if="this.postgres" class="conteiner" >
            <div  v-for="item in this.postgres" :key="item.message" class="card" >
              <div class="textInfo">
              <p>id: <b>{{ item.id}}</b>
              nome: <b>{{ item.nome}}</b>
              telefone: <b>{{ item.celular }}</b></p>  
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
const {get} = require('axios')
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function (){
    return {
      dataView: [],
      search: '',
      mysql: [],
      postgres: [],
    }
  }, async created() {
        try {    
        const url1 = `http://localhost:8080/mysql`;
        const mysqlData = await get(url1)
        for (let i = 0; i < 20; i++){
          this.mysql.push(mysqlData.data[i])
        }
        const url2 = `http://localhost:8080/postgres`;
        const postgresData = await get(url2)
        postgresData.data.sort((a, b) => {return a.id - b.id });


        for (let i = 0; i < 20; i++){
          this.postgres.push(postgresData.data[i])
        }
        return 
              } catch (error){
          console.error(error);
        } return
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Apidoc{
  
  padding: 40px;
  text-align: left;
}
.texto{
  width: 80%;
  margin: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
