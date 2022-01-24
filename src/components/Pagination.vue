<template>
  <nav class="pagination is-right">
    <ul class="pagination-list">
      <li>
        <a  class="pagination-link has-text-white has-background-primary-dark"
            @click="onFirst"
            :disabled="page == 1">
          <span>&lt;&lt;</span>
        </a>
      </li>

      <li>
        <a  class="pagination-link has-text-white has-background-link-dark"
            @click="onPrevious"
            :disabled="page == 1">
          <span>&lt;</span>
        </a>
      </li>

      <li>
        <input  class="input is-normal"
                step="1"
                type="number"
                min="1"
                :max="lastPage"
                @keydown.enter="onInput"
                ref="input">
      </li>

      <li class="has-text-weight-bold px-2">/ {{ lastPage }}</li>

      <li>
        <a  class="pagination-link has-text-white has-background-link-dark"
            @click="onNext"
            :disabled="page == lastPage">
          <span>&gt;</span>
        </a>
      </li>

      <li>
        <a  class="pagination-link has-text-white has-background-primary-dark"
            aria-label="Goto last page"
            @click="onLast"
            :disabled="page == lastPage">
          <span>&gt;&gt;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Pagination',
  props: ['lastPage'],

  data: function() {
    return {
      page: 1
    }
  },

  methods: {
    onFirst() {
      this.page = 1
      this.emitPageChangeEvent()
    },

    onPrevious() {
      this.page -= 1
      this.emitPageChangeEvent()
    },

    onNext() {
      this.page += 1
      this.emitPageChangeEvent()
    },

    onLast() {
      this.page = this.lastPage
      this.emitPageChangeEvent()
    },

    onInput() {
      const el = this.$refs.input as HTMLInputElement
      console.log(el.value)
      if (!el.validity.valid)
        return
      const value = parseInt(el.value)
      if (isNaN(value)) {
        this.page = value
        this.emitPageChangeEvent()
      }
    },

    emitPageChangeEvent() {
      this.$emit('page-changed', this.page)
    }
  }
})
</script>
