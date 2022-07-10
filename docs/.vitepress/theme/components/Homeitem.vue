<script setup lang='ts'>
import { useRouter } from 'vitepress'
const { name, color, bgc, path } = defineProps<{
  name: string
  path: string
}>()
const router = useRouter()
function handleToRouter() {
  router.go(path)
}
</script>

<template>
  <div
    flex justify-center items-center md:w="30%"
    h-25 border="~ 0 rounded-lg" cursor-pointer shadow-lg
    hover="shadow-xl translate-y--1" transition="all"
    @click="handleToRouter"
  >
    {{ name }}
  </div>
</template>

<style scoped lang='scss'>
</style>
