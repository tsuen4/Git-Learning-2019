<template>
  <div id="tutorial">
    <TextComponent :tutorial-name="tutorialName" />
  </div>
</template>

<script>
import TextComponent from '@/components/Text.vue'

export default {
  name: 'Tutorial',
  components: {
    TextComponent
  },
  props: {
    tutorialName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      tutorial: ''
    }
  },
  created () {

  }
}
</script>

<style>
#tutorial {
  overflow: auto;
  margin-left: 250px;
}
</style>
