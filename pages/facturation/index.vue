<template>
<div class="template">
    <nav-bar :clients="clients" />
   
    <dashboard :factures="factures"/>
   
     <transition name="fade" appear>
    <div class="overflow">
          <facture :factures="factures"/>
    </div>
     </transition>
</div>
  
</template>

<script>

import facture from '../../components/Facturation/facture.vue'
import dashboard from '../../components/Facturation/dashboard.vue'
import NavBar from '../../components/Facturation/NavBar.vue'



export default {

  components: { facture, NavBar, dashboard},
  async asyncData({ $strapi }) {
    return {
      factures: await $strapi.find('factures?_sort=numero:ASC'),
      clients: await $strapi.find('clients'),
    }
  },
  computed: {
    totalClient() {
      const total = this.factures.reduce((acc, p) => {
        acc += p.montantttc
        return acc
      }, 0)
      return total
    },
  }


}
</script>

<style>

.fade-enter-active {
  animation: fade .5s;
}
@keyframes fade  {
  from {
    opacity: 0;
    transform: translateY(-20px);

  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }

}
.overflow {
  overflow-y: scroll!important;
  padding-right: 2px;
  height: 105vh;
}

</style>