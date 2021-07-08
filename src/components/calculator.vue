<template>
  <div class="calculadora">
    <div class="display">{{valorCorrente || 0}}</div>
    <div @click="Clear" class="botao">C</div>
    <div @click="sinal" class="botao">+/-</div>
    <div @click="porcentagem" class="botao">%</div>
    <div @click="dividir" class="botao">÷</div>
    <div @click="adicionar('7')" class="botao">7</div>
    <div @click="adicionar('8')" class="botao">8</div>
    <div @click="adicionar('9')" class="botao">9</div>
    <div @click="multiplicar" class="botao operadores">x</div>
    <div @click="adicionar('4')" class="botao">4</div>
    <div @click="adicionar('5')" class="botao">5</div>
    <div @click="adicionar('6')" class="botao">6</div>
    <div @click="diminuir" class="botao operadores">-</div>
    <div @click="adicionar('1')" class="botao">1</div>
    <div @click="adicionar('2')" class="botao">2</div>
    <div @click="adicionar('3')" class="botao">3</div>
    <div @click="somar" class="botao operadores">+</div>
    <div @click="adicionar('0')" class="botao zero">0</div>
    <div @click="ponto" class="botao">.</div>
    <div @click="resultado" class="botao">=</div>
  </div>
</template>

<script>
  import calc from "../js/index"
  export default {
    name: "calculator",
    mixins: [calc]
  }
</script>

<style scoped>

</style>