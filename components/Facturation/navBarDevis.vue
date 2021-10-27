<template>
  <div class="position">
      <div class="navbar">
          <div class="block_left">
              <div class="title">
                  <h2>Facturation</h2>
              </div>
              <div class="nav">
                  <nuxt-link to="/facturation">
                    Facture
                  </nuxt-link>
                  <nuxt-link to="/facturation/devis">
                    Devis
                  </nuxt-link>
                   <nuxt-link to="/contact/partenariats">
                    Avoir
                  </nuxt-link>
              </div>

          </div>
          <div class="block_right">
              <div class="add" @click="add = !add">
                 <p> Créer un devis</p>
              </div>
          </div>
           <div class="overlay"  v-if="add">
          <div class="add_client">
              <add-devis :clients="clients" v-if="add"/>
          </div>
          </div>

      </div>
  </div>
</template>

<script>
import AddDevis from './addDevis.vue'

export default {
  components: { AddDevis },
   props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
  data() {
      return {
          add: false,
      }
  }
}

</script>

<style scoped>

.nuxt-link-exact-active {
    color: #4868FD!important;
    background-color: #C8D2FE!important;
    border-radius: 4px;
    font-weight: bold;
    padding: 8px 16px;
}

.position {
    position: fixed;
    top: 70px;
left: 170px;
height: 70px;
right: 0;
box-shadow: 2px 2px 2px rgba(219, 219, 219, 0.473);
    background-color: white;
}

.navbar {
    max-width: 100%;
    margin-left: 37px;
    margin-top: 20px;margin-bottom: 20px;
    margin-right: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.block_left {
    display: flex;
    align-items: center;
}

.block_left h2 {
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
}

.nav a {
    margin: 0 0px;
    color: #8C909C;
    background-color: transparent;
    border-radius: 4px;
    font-weight: bold;
    padding: 8px 16px;
    transition: all .3s;
    font-size: 14px;
}

.nav a:hover {
   color: #4868fd;

}

.add {
    background-color: #4868fd;
    color: white;
    padding: 8px 16px;
    cursor: pointer;
    transition: all .3s;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
}

.add:hover {
    background-color: #3d5ada;
 
}

.add_client {
    position: fixed;
    display: flex;
    top: 120px;
    left: 80px;
    right: 50px;
    z-index: 1;
    flex-flow: column;
    align-items: center;
    overflow: scroll;
}

.overlay {
     position: fixed;
     inset: 0;
     background-color: rgba(0, 0, 0, 0.329);
}

</style>