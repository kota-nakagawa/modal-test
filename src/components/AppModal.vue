<template>
  <div v-if="isActive">
    <transition
      :name="animation"
      @after-leave="afterClose">
      <component
        :is="component"
        v-bind="props"
        :parent="parent"
        @resolve="resolveClose"
        @reject="rejectClose"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    component: [Object, Function],
    props: Object,
    resolve: Function,
    reject: Function,
    animation: String,
    parent: Object,
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    open() {
      this.isActive = true
    },
    close() {
      this.isActive = false
    },
    afterClose() {
      this.$destroy()
      document.body.removeChild(this.$el)
    },
    resolveClose(payload) {
      if (this.resolve) this.resolve(payload)
      this.close()
    },
    rejectClose() {
      if (this.reject) this.reject()
      this.close()
    },
  },
  beforeMount() {
    document.body.appendChild(this.$el)
  },
  mounted() {
    this.open()
  }
}
</script>

