<template>
  <div>
      <the-header/>
      <nuxt/>
  </div>
</template>

<script>
import TheHeader from '../components/Header/TheHeader.vue'
export default {
   async asyncData({ $strapi }) {
    return {
      users: await $strapi.find('users'),
    }
  },
  components: { TheHeader },
  // middleware: "auth",
  

}
</script>

<style>
html {
  font-family: proxima-nova, Times, serif;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #F6F7FE;
}


*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}




</style>