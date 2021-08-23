<template>
  <div class="Apidoc">
    <div class="texto">
    <h1>Login</h1>
    <h3>Cliente_A token - Id 01 /MySql.</h3>
    <p>JWT válido por 05 minutos.</p>
    <textarea
      :value="token_a"
      @input="token_a = $event.target.value"
      rows="7"
      cols="40"
    ></textarea>
    <h3>Cliente_B token - Id 02 /Postgres.</h3>
    <p>JWT válido por 05 minutos.</p>
    <textarea
      :value="token_b"
      @input="token_b = $event.target.value"
      rows="7"
      cols="40"
    ></textarea>
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
      token_a: '',
      token_b: '',
    }
  }, async created() {
        try {    
        const url = `http://localhost:8080/token`;
        const tokenArr = await get(url)
        console.log(tokenArr.data)
        this.token_a = tokenArr.data[0]
        this.token_b = tokenArr.data[1]
         
         
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
