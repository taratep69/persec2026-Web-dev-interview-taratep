<template>
  <div class="layout-container">
    <Sidebar />
    <div class="main-area">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Global styles are already defined in styles.css */
</style>
