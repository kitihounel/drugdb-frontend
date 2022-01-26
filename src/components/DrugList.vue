<template>
  <div>
    <table class="table is-striped is-hoverable is-fullwidth">
      <tbody>
        <tr v-for="index in drugs.length" :key="index">
          <td>
            <span class="is-link">
              <router-link :to="{ name: 'DrugPage', params: { drugId: drugs[index - 1].id } }">
                {{ drugs[index - 1].name }}
              </router-link>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Drug from "@/typings/drug"

export default defineComponent({
  name: 'DrugList',
  props: {
    drugs: {
      type: Array as PropType<Drug[]>,
      required: true
    }
  },
  computed: {
    
  }
})
</script>
