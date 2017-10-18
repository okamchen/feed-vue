<template>
  <div class="card text-left">
    <md-layout md-gutter>
      <md-layout md-flex="70" class="avatar">
        <image-responsive :url="uriProfile" class="icon"/>
      </md-layout>
      <md-layout md-flex="20">
        <md-layout md-gutter>
          <span>{{ user }}</span>
        </md-layout>
        <md-layout md-gutter>
          <span>{{ date }}</span>
        </md-layout>
      </md-layout>
    </md-layout>

    <transition name="card-fade">
      <div class="card-body">
        <slot>

        </slot><!-- end panel-body -->
      </div>
    </transition> 
  </div><!-- end panel -->
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
  width: 100%;
  height: 100%;
  display: block;
}

.description {
  width: 70%
}

.description-user {
  width: 100%
}

.description-date {
  width: 100%
}

.card {
  padding: 0 auto;
  display: inline-block;
  margin: 5pt;
  width: 60%;
  height: 100%;
  vertical-align: top;
}

.card-fade-enter, .card-fade-leave-active {
  opacity: 0
}

.card-fade-enter-active, .card-fade-leave-active {
  transition: opacity .4s
}
</style>
