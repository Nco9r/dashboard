<template>
<div class="template">
    <nav-bar-devis :clients="clients"/>
     <transition name="fade" appear>

    <devis :devis="devis"/>
     </transition>
    <recap-devis :devis="devis"/>
</div>
  
</template>

<script>
import devis from '../../components/Facturation/devis.vue'

import NavBarDevis from '../../components/Facturation/navBarDevis.vue'
import RecapDevis from '../../components/Facturation/recapDevis.vue'
export default {
  components: { devis,  RecapDevis, NavBarDevis },
  async asyncData({ $strapi }) {
    return {
      devis: await $strapi.find('devis?_sort=numero:ASC'),
      clients: await $strapi.find('clients'),

    }
  },


}
</script>

<style>

.fade-enter-active {
  animation: fade .5s;
}
@keyframes fade  {
  from {
    opacity: 0;
    transform: translateY(-10px);

  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }

}

</style>