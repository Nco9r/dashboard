<template>
  <div class="template">
    <Nav-bar />
    <Clients :clients="clients" />
  </div>
</template>

<script>
import Clients from '../../components/Contact/Clients.vue'
import AddClients from '../../components/Contact/AddClients.vue'
import NavBar from '../../components/NavBar/NavBar.vue'

export default {
  components: { Clients, NavBar },
  async asyncData({ $strapi }) {
    return {
      clients: await $strapi.find('clients'),
    }
  },
}
</script>

<style>
.template {
  margin-top: 170px;
  margin-right: 50px;
}
</style>
