
<template>
<div class="group_form">
  <div class="title_form">
    <h2>Créer une facture</h2>
    <a href="/facturation">
    <p>Fermer</p></a>
  </div>
  <div class="navbar_form" >
    <div class="customer" @click="customer = true, addCustomer = false" :class="{ active : customer}">
      <img src="~assets/img/svg/user-check.svg" alt="">
      <p>Client existant</p>
    </div>
     <div class="customer" @click="customer = false, addCustomer = true" :class="{ active : addCustomer}">
      <img src="~assets/img/svg/user-plus.svg" alt="">

      <p>Nouveau client</p>
    </div>
  </div>
  <hr>
  <transition name="active_form" appear>
  <form @submit="submit" v-if="customer">
    <div class="label_group">
      <div class="label">
        <p>Client</p>
        <select  name="" id="" v-model="form.client">
          <option value="choisoir" disabled selected>Choisir dans la liste</option>
          <option v-for="c in clients" :key="c.id" :value="c.client">{{c.client}}</option>
        </select>
      </div>
      <div class="label">
        <p>Numéro de facture</p>
        <input type="text" required v-model="form.numero" value="FA2021-">
      </div>
      <div class="label">
        <p>Date</p>
        <input type="date" required v-model="form.date">
      </div>
       <div class="label">
        <p>Montant HT</p>
        <input type="text" required v-model="form.montantht">
      </div>
        <div class="label">
        <p>Acompte</p>
        <input type="text" required v-model="form.accompte">
      </div>
       <div class="label">
        <p>Montant TTC</p>
        <input type="text" required v-model="form.montantttc">
      </div>
      <div class="label">
        <p>Montant TVA</p>
        <input type="number" required v-model="form.tva">
      </div>
       <div class="label">
         <p>Réglement</p>
         <div class="toggle" @click="toggle = !toggle" :class="{ toggle_bck : toggle}"> 
           <div class="rond" :class="{ active_toggle : toggle}">
           </div>
         </div>
      </div>
      <hr>
    </div>
      <div class="btn_add_client">
        <button>Ajouter</button>
      </div>

  </form>
   <form @submit="submit" v-if="addCustomer">
    <div class="label_group">
      <div class="label">
        <p>Client</p>
        <input type="text" required v-model="form.client">
      </div>
      <div class="label">
        <p>Numéro de facture</p>
        <input type="text" required v-model="form.numero">
      </div>
      <div class="label">
        <p>Date</p>
        <input type="date" required v-model="form.date">
      </div>
       <div class="label">
        <p>Montant HT</p>
        <input type="text" required v-model="form.montantht">
      </div>
        <div class="label">
        <p>Acompte</p>
        <input type="text" required v-model="form.accompte">
      </div>
       <div class="label">
        <p>Montant TTC</p>
        <input type="text" required v-model="form.montantttc">
      </div>
      <div class="label">
        <p>Montant TVA</p>
        <input type="number" required v-model="form.tva">
      </div>
      <div class="label">
         <p>Réglement</p>
         <div class="toggle" @click="toggle = !toggle" :class="{ toggle_bck : toggle}"> 
           <div class="rond" :class="{ active_toggle : toggle}">
           </div>
         </div>
      </div>
      <hr>
    </div>
      <div class="btn_add_client">
        <button>Ajouter</button>
      </div>

  </form>
  </transition>

 

</div>
</template>

<script>
export default {
   props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      customer: false,
      addCustomer: false,
      toggle: false,
      form: {
        client: '',
        numero: '',
        date: '',
        montantht: '',
        montantttc: '',
        tva:'',
        date: '',
        staut: '',
        prix: '',
        accompte: ''
      },
    }
  }, 
  methods: {
    submit() {
      this.$axios
        .post('http://localhost:1337/factures', { ...this.form })
        .then(
          (res) => (
            (this.form = '')
          )
        )
        .catch()
    }
  }
    
}
</script>

<style scoped>

hr {
  border: none;
  background-color: #ebeff3;
  width: 100%;
  margin-top: 20px;
  height: 1px;
}
form {
  margin-top: 25px;
  background-color: #fafafd;
  padding: 25px;
  border-radius: 4px;


}

.group_form {
  position: fixed;
  overflow-y: scroll;
  width: 700px;
  display: flex;
  flex-flow: column;
  background-color: white;
  border-radius: 9px;
  padding: 55px 100px;
}

.title_form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title_form p{
  color: #111827;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 12px;
}

.title_form h2{
  color: #4868fd;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
}

.label_group {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.label {
  width: 48%;
  margin-bottom: 20px;
}

.label p {
  font-weight: bold;
  font-size: 14px;
  color: #575a63;
  margin-bottom: 3px;
}

.label select {
   border: 0px;
  border-radius: 4px;
  padding: 8px 16px;
   border: 1Px solid #ebeff3;

  font-size: 16px;
  background-image: url('~/assets/img/svg/angle.svg');
background-position: 92% 48%;
background-repeat: no-repeat;
background-size: 18px;
  -webkit-appearance: none;

    color: #cacdd6;
  width: 100%;
  font-weight: 400;

}

.label input {
  border: 1Px solid #ebeff3;
  border-radius: 4px;
  padding: 8px 16px;
  width: 100%;
}

.btn_add_client {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  margin-top: 30px;
}

.btn_add_client button {
   background-color: #4868fd;
    color: white;
    padding: 8px 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
}

.navbar_form {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.customer {
  cursor: pointer;
  width: 48%;
  display: flex;
  flex-flow: column;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 2px dashed #a3a3a3;
  border-radius: 4px;
  transition: all .3s;
}

.active {
  border: 2px dashed #4868fd;

}
.customer p {
  color: #9CA3AF;
  font-weight: 600;
  font-size: 14px;
}

.customer img {
  width: 30px;
  margin-bottom: 5px;
}

.customer input {
  margin-left: 20px;
}



input[type='date' ]{
  font-size: 12px;
  font-family: proxima-nova, sans-serif;
  -webkit-appearance: none;
  color: #9CA3AF;
}

.toggle {
  width: 55px;
  height: 30px;
  border-radius: 40px;
  transition: all .3s;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: rgb(221, 225, 235);
}

.rond {
  width: 20px;
  display: flex;
  justify-content: flex-start;
  height: 20px;margin-left: 7px;
  border-radius: 50%;
  transition: all .3s;
  background-color: white;
}

.toggle_bck {
  background-color: #4868fd;
  
}

.active_toggle {
  justify-content: flex-end;
  margin-left: 28px;
  


}


</style>
