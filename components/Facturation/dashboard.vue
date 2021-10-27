<template>
  <div class="block">
    <div class="block_dash">
      <div class="title_dash">
        <h2>Récapitulatif</h2>
      </div>
      <div class="dash">
        <div class="item_dash">
          <p>Chiffre d'affaire 2021</p>
          <p>{{ totalClient | currency('') }}€</p>
        </div>
        <div class="item_dash">
          <p>Cotisations URSAFF</p>
          <p>{{ (totalClient - totalClient * 0.78) | currency('') }}€</p>
        </div>
         <div class="item_dash">
          <p>TVA</p>
          <p>0€</p>
        </div>
        <div class="item_dash">
          <p>Bénéfice</p>
          <p>{{ (totalClient * 0.78) | currency('') }}€</p>
        </div>

        <div class="item_dash">
          <p>Salaire Médian</p>
          <p>{{ ((totalClient * 0.78) / 12) | currency('') }}€</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    factures: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    totalClient() {
      const total = this.factures.reduce((acc, p) => {
        acc += p.montantttc
        return acc
      }, 0)
      return total
    },
  },
}
</script>

<style scoped>
.block {
  position: fixed;
  right: 0;
  background-color: white;
  left: 170px;
  border-top: 1px solid rgba(219, 219, 219, 0.473);
  bottom: 0;
}

.block_dash {
  margin-right: 50px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title_dash {
  margin-left: 50px;
}

.title_dash h2{
  font-size: 22px;
  font-weight: bold;
}

.dash {
  margin-left: 210px;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
.item_dash {
  margin-left: 100px;
}

.item_dash p:nth-child(1) {
  color: #8c909c;
}

.item_dash p:nth-child(2) {
  color: #1f2937;
  font-weight: bold;
  font-size: 18px;
}
</style>
