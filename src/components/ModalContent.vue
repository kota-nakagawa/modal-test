<template>
  <div>
    <h2>Modal Content</h2>
    <p>{{ info }}</p>
    <button @click="close">閉じる</button>
    <button @click="incrementParentCount">親のカウントを増やす</button>
  </div>
</template>

<script>
export default {
  name: 'ModalContent',
  props: {
    info: String,
    parent: Object,
  },
  methods: {
    close() {
      this.$emit('resolve')
    },
    incrementParentCount() {
      this.parent.incrementCount();
    },
  },
}
</script>