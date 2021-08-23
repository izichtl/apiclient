<template>
  <div class="home">
    <Clientes />
  </div>
</template>

<script>
// @ is an alias to /src
import Clientes from '@/components/Clientes.vue'

export default {
  name: 'Home',
  components: {
    Clientes
  }
}
</script>
