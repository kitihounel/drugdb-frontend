<template>
  <nav class="pagination is-right">
    <ul class="pagination-list">
      <li>
        <button class="button is-outlined is-link is-light pagination-link has-text-weight-bold"
                @click="onFirst"
                :disabled="onFirstPage">
          <span>&lt;&lt;</span>
        </button>
      </li>

      <li>
        <button class="button is-outlined is-link is-light pagination-link has-text-weight-bold"
                @click="onPrevious"
                :disabled="onFirstPage">
          <span>&lt;</span>
        </button>
      </li>

      <li>
        <input  class="input is-normal is-link"
                step="1"
                type="number"
                min="1"
                ref="input"
                v-model="page"
                :max="lastPage"
                @keydown.enter="onInput">
      </li>

      <li class="has-text-weight-bold px-2">/ {{ lastPage }}</li>

      <li>
        <button class="button is-outlined is-link is-light pagination-link has-text-weight-bold"
                @click="onNext"
                :disabled="onLastPage">
          <span>&gt;</span>
        </button>
      </li>

      <li>
        <button class="button is-outlined is-link is-light pagination-link has-text-weight-bold"
                aria-label="Goto last page"
                @click="onLast"
                :disabled="onLastPage">
          <span>&gt;&gt;</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Pagination',
  props: {
    lastPage: {
      type: Number,
      required: true
    }
  },

  data() {
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
      if (!el.validity.valid)
        this.page = 1
      else {
        const n = parseInt(el.value)
        this.page = isNaN(n) || n < 1 || n > this.lastPage ? 1 : n
      }
      this.emitPageChangeEvent()
    },

    emitPageChangeEvent() {
      this.$emit('page-changed', this.page)
    }
  },

  computed: {
    onFirstPage() {
      return this.page == 1
    },

    onLastPage() {
      return this.page == this.lastPage
    }
  }
})
</script>
