<template>
  <div>
    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
      <tbody>
        <tr v-for="drug in drugs">
          <td>
            <span class="is-link">{{ drug.name }}</span>
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
  }
})
</script>
