<template>
  <div id="app">
    <eventsComponent/>
  </div>
</template>

<script>
import eventsComponent from './components/eventsComponent.vue'

export default {
  name: 'app',
  components: {
    eventsComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
