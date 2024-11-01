<template>
  <div id="app">
    <p>{{ count }}</p>
    <button @click="openMyModal">モーダルを表示する</button>
  </div>
</template>

<script>
import { openModal } from './openModal'
import ModalContent from './components/ModalContent.vue'

export default {
  name: 'App',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    openMyModal() {
      openModal(
        ModalContent,
        { info: 'モーダルに表示する内容' },
        this,
        { animation: 'fade' }
      )
      .catch((e) => {
        console.log(e)
      })
    },
    incrementCount() {
      this.count += 1;
    },
  },
}
</script>
