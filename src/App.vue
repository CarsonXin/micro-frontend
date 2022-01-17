<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { RouterView, RouterLink } from 'vue-router'
import { KeepAlive } from 'vue'

</script>

<template>
  <div class="flex-list padding-10">
    <RouterLink to="/helloWorld" class="link-item">
      <div>Vue 3 Demo</div>
    </RouterLink>
    <RouterLink to="/dashboard" class="link-item">
      <div>父应用路由 - Dashboard</div>
    </RouterLink>
    <RouterLink to="/vue-app" class="link-item">
      <div>Vue-3-App 子应用</div>
    </RouterLink>
    <RouterLink to="/react-app-vite" class="link-item">
      <div>React-App-Vite</div>
    </RouterLink>
    <RouterLink to="/vue-cli-app" class="link-item">
      <div>vue 2子应用</div>
    </RouterLink>
  </div>

  <div class="router-view-container">
      <RouterView />
      <div id="react-app-vite-container"></div>
      <div id="vue-cli-app-container"></div>
      <div id="vue-app-container"></div>
<!--    <iframe src="http://127.0.0.1:10011/" />-->

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.width-100 {
  width: 100%;
}

.padding-10 {
  padding: 10px;
}

.flex-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.link-item {
  color: #42b983;
}

.link-item + .link-item {
  margin-left: 10px;
}

.link-item:link,
.link-item:visited,
.link-item:hover {
  text-decoration: none;
}

.link-item:active {
  color: red;
}
</style>
