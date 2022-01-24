<template>
  <div>
    <Pagination :lastPage="10" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Pagination from '@/components/Pagination.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Pagination
  }
})
</script>
