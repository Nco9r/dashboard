<template>
  <section class="cards_box">
      <div class="title">
          <h2>Négociation</h2>
          <p>0</p>
      </div>
      <div class="add_cards">
        <p>+</p>
      </div>
  </section>
</template>

<script>
export default {

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



</style>