<template>
  <div class="Apidoc">
    <div class="texto">
    <h1>Registra Cliente Api</h1>
    <h3>Api REST com autenticação padrão JWT, MySql e Postgres</h3>
    <p>Acesse Login  para gerar um token JWT com a validade de 3 minutos. Utilize no Authorization Header da requisição.</p>
    <h3>Fluxo de Ações</h3>
    <ul>
      <li>Gera Token JWT de Login</li><br>
      <li>Recebe via /post</li><br>
      <li>Valida parametros da requisição</li><br>
      <li>Valida a session</li><br>
      <li>Identifica o cliente</li><br>
      <li>Valida a Chave Secreta</li><br>
      <li>Trata os dados</li><br>
      <li>Dispacha salva no banco do cliente</li><br>
    </ul>
    <h3>Rotas</h3>
    <ul>
      <li>/Login   -     gera token JWT.</li><br>
      <li>/api   -     upload de arquivos.</li>
      <li>/mysql   -     para acessar dados cliente_a.</li>
      <li>/postgres   -    para acessar dados cliente_b.</li>
    </ul>
    <h3>Padrão Header</h3>
    <pre>
    <code v-pre>{"headers":</code>
    <code v-pre>     {"client_id": "id",</code> 
    <code v-pre>     "Authorization": "JWT_Token",</code>
    <code v-pre>     "Content-Type": "application/json"</code>
    <code v-pre>     }</code>
    <code v-pre>    }</code></pre>
    <h3>Padrão Json</h3>
    <pre>
    <code v-pre>{"contacts":</code>
    <code v-pre>     [{"name": "nome",</code> 
    <code v-pre>     "cellphone": "5541959365078"</code>
    <code v-pre>     }]</code>
    <code v-pre>    }</code>
    </pre>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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
