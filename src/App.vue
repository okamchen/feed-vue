<template>
  <div id="app">
    <div v-for="post of posts">
      <card :user="post.user" :uriProfile="post.uriProfile" :date="post.date" :description="post.description">
        <image-responsive :url="post.uriPost"/>
      </card>
    </div>
  </div>
</template>

<script>
import Card from './shared/Card.vue'
import ImageResponsive from './shared/ImageResponsive.vue'

export default {
  components: {
    'card': Card,
    'image-responsive': ImageResponsive
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.$http.jsonp('http://www.mocky.io/v2/59e822ed0f00004704aef9f5')
      .then(res => this.posts = res.body.posts, err => console.log(err))
  },
}
</script>

<style scoped>
#app {
  text-align: center;
  display: block;
}
</style>
