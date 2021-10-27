<template>
  <section class="cards_box">
      <div class="title">
          <h2>Contact téléphonique</h2>
          <p>{{contacts.length}}</p>
      </div>
      <div class="add_cards">
        <p>+</p>
      </div>
      <div v-for="c in contacts" :key="c.contacts">
         <div class="card" >
          <div class="infos">
              <h3>{{c.client}}</h3>
              <p class="text-gray-700">{{c.service}}</p>
          </div>
          <div class="date">
              <p class="text-gray-400">{{c.date}}</p>
                            <p class="text-gray-700">{{c.prix}}</p>

          </div>
      </div>
      </div>
       
  </section>
</template>

<script>
export default {
   props: {
    contacts: {
      type: Array,
      default: () => [],
    },
  },

}
</script>

<style scoped>

.cards_box {
margin-left: 5px;
width: 20%;
height: 100%;
border-right: 1px solid #d2d8e4;

}

.title {
  display: flex;
  justify-content: space-between;
}

.title p {
  margin-right: 20px;
  width: 20Px;
  height: 20px;
  font-size: 14px;
  color: #393a3b;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background-color: #d2d8e4;
  border-radius: 4px;
  }

.title h2 {
  font-weight: bold;
  font-size: 14px;
}

.add_cards {
  width: 95%;
  margin: 10px auto;
  display: flex;
  font-weight: bold;
  color: #707375;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  height: 40px;
  font-size: 18px;
  border: 2px dashed #d2d8e4;
  border-radius: 6px;

}

.card {
    background-color: white;
    border-radius: 6px;
    max-width: 95%;padding: 10px;
    margin-right: 20px;
    margin: 10px 0;
box-shadow: 4px 4px 4px rgba(219, 219, 219, 0.473);
}

.infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.infos h3 {
    font-size: 14px;
    font-weight: bold;
}
.infos p {
    font-size: 14px;
    font-weight: bold;
    background-color: #c7daff;
    border-radius: 4px;
    color: rgb(21, 86, 226);
    padding: 4px 8px;

}

input {
  pointer-events: none;
}

.date {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.date p {
    font-size: 14px;
}



</style>