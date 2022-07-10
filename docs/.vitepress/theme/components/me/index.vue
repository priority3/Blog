<script setup lang='ts'>
import { useRouter } from 'vitepress'
import { getTopicData } from '../../data/helper.ts'
import HomeItem from '../Homeitem.vue'
const router = useRouter()
</script>

<template>
  <div>
    <h1 border="b light-800" text-xl>
      about me
    </h1>
    <div>
      <div my-5>
        🤔working Ts/Js/Python
      </div>
      <home-item
        v-for="{ name, color, path } in getTopicData()"
        :key="name"
        :style="{
          'color': color.text,
          'background-color': color.bg,
        }"
        :name="name"
        :path="path"
      />
    </div>
  </div>
</template>

<style scoped>
h1{
  color: var(--fg-deeper);
  font-weight: 800;
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: 0.8888889em;
  line-height: 1.1111111;
}
</style>
