<template>
  <Navbar />
  <div class="container mt-5">
    <router-view v-slot="{ Component }">
      <keep-alive include="Home">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
})
</script>
