<template>
  <button @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    click (event) {
      // 親から @click で指定されたものを実行
      this.$emit('click', event)
    }
  }
}
</script>

<style scoped>
button {
  font-size: 16px;
  /* display: inline-block; */
  background-color: #fff;
  border: solid 1px #f05033;
  color: #f05033;
  border-radius: 0.25rem 0.25rem;
}

button:hover {
  background-color: #f05033;
  color: #fff;
}

button:active {
  background-color: #af250d;
}
</style>
