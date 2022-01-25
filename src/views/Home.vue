<template>
  <div>
    <SearchBar />

    <div v-if="showList" class="container mt-5">
      <h4 class="title is-4">Search results</h4>
      <DrugList :drugs="drugs" />
    </div>

    <div v-if="showNav" class="container mt-5">
      <Pagination />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import Pagination from '@/components/Pagination.vue'
import DrugList from '@/components/DrugList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SearchBar,
    Pagination,
    DrugList
  },

  data: function() {
    return {
      drugs: [],
      showNav: true,
      showList: true
    }
  }
})
</script>
