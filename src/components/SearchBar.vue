<template>
  <div>
    <div class="field has-addons">
      <div class="control is-expanded">
        <input  autofocus
                class="input"
                type="text"
                placeholder="Type here..."
                autocomplete="off"
                spellcheck="false"
                ref="input"
                v-model="term"
                @keydown.enter="onSubmit">
      </div>
      <div class="control">
        <button class="button is-link is-light is-outlined" @click="onSubmit">
          &#x1F50E;
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchBar',

  data: function() {
    return {
      term: ''
    }
  },

  activated: function() {
    const q = this.$route.query.q
    if (q && typeof q == 'string') {
      const trimmed = q.trim()
      if (trimmed !== this.term) {
        this.term = trimmed
        this.$emit('search', trimmed)
      }
    }
  },

  methods: {
    onSubmit() {
      const trimmed = this.term.trim()
      if (trimmed.length != 0)
        this.$emit('search', trimmed)
    }
  }
})
</script>
