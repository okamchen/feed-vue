<template>
  <img class="image-responsive" :src="url">
</template>

<script>
export default {
  props: ['url']
}
</script>

<style scoped>
.image-responsive {
  width: 100%;
}
</style>