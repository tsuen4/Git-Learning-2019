<template>
  <div id="tutorial">
    {{ tutorialName }}
  </div>
</template>

<script>
export default {
  name: 'Tutorial',
  props: {
    tutorialName: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
#tutorial {
  overflow: auto;
  margin-left: 250px;
}
</style>
