<template>
  <div id="app">
    <transition-group name="list" tag="div">
      <drag v-for="n in numbers" :key="n" class="drag" :data="n" @cut="remove(n)" go-back>{{n}}</drag>
    </transition-group>
    <drop class="main" @drop="onDrop">
      <span v-for="(n, index) in dropped" :key="index">Dropped {{n}};&nbsp;</span>
      <drop-mask class="mask"></drop-mask>
    </drop>
    <drop class="main" @drop="onDrop2">
      <span v-for="(n, index) in dropped2" :key="index">Dropped {{n}};&nbsp;</span>
      <drop-mask class="mask"></drop-mask>
    </drop>
  </div>
</template>

<script>
import { Drag, Drop, DropMask } from "vue-easy-dnd";

export default {
  name: "App",
  components: {
    Drag,
    Drop,
    DropMask
  },
  data: function() {
    return {
      numbers: [1, 2, 3, 4, 5],
      dropped: [],
      dropped2: []

    };
  },
  methods: {
    onDrop(e) {
      this.dropped.push(e.data);
    },
    onDrop2(e) {
        this.dropped2.push(e.data); 
    }
    
  }
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "Roboto";
}

#app {
  
    max-width: 700px;
    margin: 300px auto;
}

.drag {
  width: 60px;
  height: 60px;
  background-color: rgb(220, 220, 255);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 10px;
  font-size: 20px;
  transition: all 0.5s;
}

.main {
  margin: 20px 10px;
  border: 1px solid black;
  height: 200px;
  position: relative;
}

.mask {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: rgba(255, 0, 0, 0.2);
  width: 200px;
  height: 100px;
}

.mask::before {
  content: "MASK";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.4);
  font-size: 25px;
  font-weight: bold;
}

.drop-allowed {
  background-color: rgba(0, 255, 0, 0.2);
}

.drop-forbidden {
  background-color: rgba(255, 0, 0, 0.2);
}

.drop-in {
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.4);
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}
</style>
