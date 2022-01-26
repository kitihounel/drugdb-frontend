<template>
  <div>
    <SearchBar @search="onSearch" />

    <div v-if="showList" class="mt-5">
      <div v-if="drugs.length > 0">
        <h4 class="title is-4">Search results</h4>
        <DrugList :drugs="drugs" />
      </div>
      <div v-else class="card">
        <header class="card-header">
          <p class="card-header-title">
            Your query returns no result.
          </p>
        </header>
      </div>
    </div>

    <div v-if="lastPage > 1" class="mt-5">
      <Pagination :last-page="lastPage" @page-changed="onPageChanged" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import Pagination from '@/components/Pagination.vue'
import DrugList from '@/components/DrugList.vue'
import { apiUrl } from '@/env'

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
      query: '',
      lastPage: 1,
      showList: false
    }
  },

  methods: {
    onSearch(query: string) {
      this.resetUI()
      this.query = query
      this.makeFetchRequest()
    },

    onPageChanged(page: number) {
      this.makeFetchRequest(page)
    },

    makeFetchRequest(page = 1) {
      const url = new URL(`${apiUrl}/search`)
      url.searchParams.append('query', this.query)
      url.searchParams.append('page', page.toString())
      fetch(url.toString(), { method: 'get' })
        .then(response => response.json())
        .then(data => {
          this.showList = true
          this.lastPage = data.last_page
          this.drugs = data.drugs
        })
        .catch(error => console.log(error))
    },

    resetUI() {
      this.showList = false
      this.lastPage = 1
      this.drugs = []
    }
  }
})
</script>
