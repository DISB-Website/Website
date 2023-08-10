
<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "App",
})
</script>

<style>
#app {
  font-family: Avenir,Helvetica,Arial,sans-serif;
}
</style>

<!-- <script setup>
import MainLayout from './layouts/MainLayout.vue';
import HomeSec from './components/HomeSec.vue';
import ProductSec from './components/ProductSec.vue';
import AboutSec from './components/AboutSec.vue';
import ContactSec from './components/ContactSec.vue';
import Footer from './components/FooterSec.vue';
</script>

<template>
  <div>
    <MainLayout/>
    <HomeSec/>
    <ProductSec/>
    <AboutSec/>
    <ContactSec/>
    <Footer/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default defineComponent({
  name: "App",
})
</script>

<style>
#app {
  font-family: Avenir,Helvetica,Arial,sans-serif;
}
</style> -->