<template>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="Message" />
</template>

<script lang="ts" setup>
import HelloWorld from '../components/HelloWorld.vue'

const Message = "Hello Vue 3 + TypeScript + Vite"

</script>