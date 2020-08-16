<template>
  <div class="scoring">
    <!-- <Button @click="reload">最初からやり直す</Button> -->
    <!-- <Button @click="scoring">採点</Button> -->
    <Button>最初からやり直す</Button>
    <Button>採点</Button>
  </div>
</template>

<script>
import Button from '@/components/Scoring.vue'

export default {
  name: 'scoring',
  components: {
    Button
  }
}
</script>

<style>
</style>
