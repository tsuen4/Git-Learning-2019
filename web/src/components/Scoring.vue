<template>
  <div class="scoring">
    <Button @click="startOver">最初からやり直す</Button>
    <Button @click="scoring">採点</Button>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'scoring',
  components: {
    Button
  },
  methods: {
    startOver () {
      // 親 (AppTutorial) に知らせる
      this.$emit('startOver')
    },
    scoring () {
      // 親 (AppTutorial) に知らせる
      this.$emit('scoring')
    }
  }
}
</script>

<style>
</style>
