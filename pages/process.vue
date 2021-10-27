<template>
  <div>
    <nav-bar />
    <main class="process">
      <div class="box_process">
        <piste :pistes="pistes" />
        <contact-tel :contacts="contacts"/>
        <envoi-devis />
        <negociation />
        <devis-sign />
      </div>
    </main>
  </div>
</template>

<script>




import ContactTel from '../components/Process/ContactTel.vue'
import DevisSign from '../components/Process/DevisSign.vue'
import EnvoiDevis from '../components/Process/EnvoiDevis.vue'
import NavBar from '../components/Process/NavBar.vue'
import Negociation from '../components/Process/Negociation.vue'
import Piste from '../components/Process/Piste.vue'

export default {
  components: { NavBar, Piste, ContactTel, EnvoiDevis,  Negociation, DevisSign },
  async asyncData({ $strapi }) {
    return {
      pistes: await $strapi.find('pistes'),
      contacts: await $strapi.find('contacts'),

    }
  },
  data() {
    return {
   
    }
  },
 
}
</script>

<style scoped>
.process {
  max-width: 100%;
  overflow: hidden;
  margin-right: 50px;
  display: flex;
  height: 960px;
  margin-left: 210px;
  margin-top: 160px;
}

.box_process {
  width: 100%;
  display: flex;
  flex-flow: row;
  height: 100%;
  justify-content: space-between;
  overflow-x: scroll;
  margin-top: 30px;
}
</style>
