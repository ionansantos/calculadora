<template>
  <div id="app">
    <calculator/>
  </div>
</template>

<script>
import calculator from "./components/calculator.vue"

export default {
  name: 'App',
  components: {
    calculator
  }
}
</script>

<style>
@import "./assets/custom.css";

body{
background: rgb(64,50,86);
background: linear-gradient(90deg, rgba(64,50,86,1) 0%, rgba(30,225,255,1) 35%, rgba(60,8,98,1) 98%);
}
</style>
