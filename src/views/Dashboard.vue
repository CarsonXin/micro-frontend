<template>
    <div>hello there~, {{ userInfo.name }}</div>
</template>

<script lang="ts" setup>

import { reactive } from 'vue'

const userInfo = reactive({
    name: 'Carson'
})

</script>