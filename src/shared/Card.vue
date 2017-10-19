<template>
  <div class="card">
    
    <div class="card card-description text-left">
      <div class="space-image">
        <div class="avatar">
          <image-responsive :url="uriProfile" class="icon"/>
        </div>
      </div>
      <div class="space-description">
        <div>
          <span>{{ user }}</span>
        </div>
        <div>
          <span>{{ date }}</span>
        </div>
      </div>
    </div>
    
    <div class="card-body">
      <transition name="card-fade" >
        <div v-meu-transform:scale.animate="1.2">
          <slot>

          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ImageResponsive from '../shared/ImageResponsive.vue'

export default {
  components :{
    'image-responsive' : ImageResponsive
  },
  props : ['user', 'uriProfile', 'date']
}
</script>

<style scoped>

.space-image{
  float: left;
  width: 60px;
}

.space-description {
  float: left;
  margin-left: 10px;
}

.avatar {
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  margin: auto;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  border-radius: 60px;
  vertical-align: middle;
}

.text-left {
  text-align: left
}

.icon {
  display: block;
}

.card {
  padding: 0 auto;
  display: inline-grid;
  margin: 5pt;
  vertical-align: top;
  width: 50%;
}

.card-fade-enter, .card-fade-leave-active {
  opacity: 0
}

.card-fade-enter-active, .card-fade-leave-active {
  transition: opacity .4s
}

.card-description {
  float: left;
  display: block;
}

.card-body {
  overflow: hidden;
}
</style>
