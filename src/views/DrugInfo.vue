<template>
  <div class="mb-5">
    <button @click="goBack" class="button has-text-weight-bold is-size-6">
      &larr; Return to previous page
    </button>
  </div>

  <div v-if="drug" class="table-container mb-4">
    <table class="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Drug details</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>{{ drug.name }}</td>
        </tr>

        <tr>
          <th>INN</th>
        </tr>
        <tr>
          <td>
            <p v-for="item in innItems" :key="item.index" class="mb-2">
              <span class="has-text-link search-link"
                    @click="search(item.value)">
                {{ item.value }}
              </span>
            </p>
          </td>
        </tr>

        <tr>
          <th class="has-text-danger">Dose</th>
        </tr>
        <tr>
          <td>
            <p v-for="item in doseItems" :key="item.index" class="mb-2">
              {{ item.value }}
            </p>
          </td>
        </tr>

        <tr>
          <th>Form</th>
        </tr>
        <tr>
          <td>{{ drug["form"] }}</td>
        </tr>

        <tr>
          <th>Route</th>
        </tr>
        <tr>
          <td>{{ drug.route }}</td>
        </tr>

        <tr>
          <th>Presentation</th>
        </tr>
        <tr>
          <td>{{ drug.presentation }}</td>
        </tr>

        <tr>
          <th>Class</th>
        </tr>
        <tr>
          <td>{{ drug.class }}</td>
        </tr>

        <tr>
          <th>Authorization</th>
        </tr>
        <tr>
          <td>{{ drug.auth }}</td>
        </tr>

        <tr>
          <th>Auth expiration date</th>
        </tr>
        <tr>
          <td>{{ drug.auth_expiration_date }}</td>
        </tr>

        <tr>
          <th>Manufacturer</th>
        </tr>
        <tr>
          <td>{{ drug.manufacturer }}</td>
        </tr>

        <tr>
          <th>Owner</th>
        </tr>
        <tr>
          <td>{{ drug.owner }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else-if="error" class="mt-5">
    <div class="card has-background-danger">
      <header class="card-header">
        <p class="card-header-title has-text-white">
          {{ error }}
        </p>
      </header>
    </div>
  </div>
  <div v-else class="has-text-centered mt-5">
    <h5 class="title is-5 mb-2">Loading...</h5>
    <Spinner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { apiUrl } from '@/env'
import Drug from '@/typings/drug'
import Spinner from '@/components/Spinner.vue'

export default defineComponent({
  name: 'DrugInfo',
  components: { Spinner },

  data: function (): { drug: Drug | undefined; error: string | undefined } {
    return {
      drug: undefined,
      error: undefined,
    }
  },

  methods: {
    goBack: function () {
      this.$router.go(-1)
    },

    search: function (q: string) {
      this.$router.push({ name: 'Home', query: { q } })
    },
  },

  computed: {
    doseItems: function () {
      if (!this.drug)
        return []
      // @ts-expect-error
      const items = this.drug.dose.split(' + ')
      // @ts-expect-error
      return items.map((value, index) => ({ value, index }))
    },

    innItems: function () {
      if (!this.drug)
        return []
      // @ts-expect-error
      const items = this.drug.inn.split(' + ')
      // @ts-expect-error
      return items.map((value, index) => ({ value, index }))
    },
  },

  mounted: function () {
    const drugId = this.$route.params.drugId
    const url = `${apiUrl}/drugs/${drugId}`
    fetch(url, { method: 'get' })
      .then((response) => {
        if (!response.ok) {
          if (response.status == 404)
            this.error = 'No such drug.'
          else
            this.error = 'Unable to fetch data for server.'
          throw new Error('Error while fetching drug.')
        }
        return response.json()
      })
      .then((drug) => (this.drug = drug))
      .catch((error) => {
        this.error = this.error || 'Unable to fetch data from server.'
        console.log(error)
      })
  }
})
</script>

<style scoped>
span.search-link {
  cursor: pointer;
}
</style>
