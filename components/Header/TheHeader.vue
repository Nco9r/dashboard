<template>
  <header >
    <div class="bar_left">
      <div class="logo">
        <img src="~assets/img/svg/logo.svg" alt="" />
      </div>
      <div class="items_dashboard">
        <nuxt-link to="/">
          <div
            class="item"
            @click="
              ;(home = true),
                (contact = false),
                (facturation = false),
                (email = false),
                (settings = false),
                (process = false)
            "
            :class="{ item_active: home }"
          >
            <div class="item_logo">
              <img src="~assets/img/svg/Home.svg" alt="" />
            </div>
            <div class="item_content">
              <p>Home</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/contact/clients">
          <div
            class="item"
            @click="
              ;(home = false),
                (contact = true),
                (facturation = false),
                (email = false),
                (settings = false),
                (process = false)
            "
            :class="{ item_active: contact }"
          >
            <div class="item_logo">
              <img src="~assets/img/svg/user.svg" alt="" />
            </div>
            <div class="item_content">
              <p>Contact</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/process">
          <div
            class="item"
            @click="
              ;(home = false),
                (contact = false),
                (facturation = false),
                (email = false),
                (settings = false),
                (process = true)
            "
            :class="{ item_active: process }"
          >
            <div class="item_logo">
              <img src="~assets/img/svg/process.svg" alt="" />
            </div>
            <div class="item_content">
              <p>Opportunités</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/facturation">
          <div
            class="item"
            @click="
              ;(home = false),
                (contact = false),
                (facturation = true),
                (email = false),
                (settings = false),
                (process = false)
            "
            :class="{ item_active: facturation }"
          >
            <div class="item_logo">
              <img src="~assets/img/svg/facturation.svg" alt="" />
            </div>
            <div class="item_content">
              <p>Facturation</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/emails">
          <div
            class="item"
            @click="
              ;(home = false),
                (contact = false),
                (facturation = false),
                (email = true),
                (settings = false),
                (process = false)
            "
            :class="{ item_active: email }"
          >
            <div class="item_logo">
              <img src="~assets/img/svg/email.svg" alt="" />
            </div>
            <div class="item_content">
              <p>Emails</p>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link to="/settings">
          <div
            class="item"
            @click="
              ;(home = false),
                (contact = false),
                (facturation = false),
                (email = false),
                (settings = true),
                (process = false)
            "
            :class="{ item_active: settings }"
          >
            <div class="item_logo">
              <img src="~assets/img/svg/setting.svg" alt="" />
            </div>
            <div class="item_content">
              <p>Réglages</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="top_bar">
      <div class="search">
        <img src="~assets/img/svg/search.svg" alt="" />
        <p>Recherche...</p>
      </div>
      <div class="infos">
        <p v-if="isAuthenticated">
          <span class="gray">Bonjour</span> {{ loggedInUser.username }}
        </p>
         <p v-if="!isAuthenticated" >
          <span class="gray">Bonjour,</span> Nicolas ROUX
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      home: true,
      contact: false,
      facturation: false,
      email: false,
      settings: false,
      process: false,
    }
  },
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
}
</script>

<style scoped>
.item_active {
  background-color: #4868fd !important;
  border-radius: 4px;
}

header {
  display: flex;
  z-index: 10;
}

.bar_left {
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #1f2937;
  width: 170px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
}

.logo img {
  width: 60px;
}

.items_dashboard {
  margin-top: 30px;
}

.item {
  display: flex;
  flex-flow: column;
  align-items: center;
  transition: all 0.3s;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: transparent;
}

.item:hover {
  background-color: #29374b;
}

.item_logo {
  margin-bottom: 5px;
}

.item_logo img {
  width: 25px;
}

.item_content p {
  color: white;
  font-size: 14px;
}

.top_bar {
  position: fixed;
  top: 0;
  left: 170px;
  right: 0;
  height: 70px;
  border-bottom: 1px solid #e4e7eb;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
}

.search {
  padding: 0px 0 0 30px;
  display: flex;
  align-items: center;
}

.search img {
  width: 20px;
}

.search p {
  color: #ced1d4;
  margin-left: 20px;
}

.infos {
  margin-right: 50px;
}

.infos p {
  font-weight: bold;
  color: #111827;
}

.gray {
  color: #6b7280;
  font-weight: 400;
}

.isloggin {
   background-color: #4868fd;
    color: white!important;
    padding: 8px 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
}
</style>
