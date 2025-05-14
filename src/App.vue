<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar class="container-fluid" />
  </header>
  <main class="container">
    <h1>Hello world!</h1>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
