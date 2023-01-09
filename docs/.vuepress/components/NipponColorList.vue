
<script lang="ts" setup>
import { defineProps } from 'vue'
import { dict2List } from '../utils'
import nippon from '../../../src/colors/nippon'
import nipponRm from '../../../src/colors/nipponRm'
import ColorNameItem from './ColorNameItem.vue'

const props = defineProps({
  lang: {
    type: String,
    default: 'en'
  }
})

const headTitles = {
  zh: {
    name: '颜色名',
    name2: '罗马字',
    color: 'Hex'
  },
  en: {
    name: 'Color name',
    name2: 'Romaji',
    color: 'Hex'
  }
}

const titles = headTitles[props.lang]
const list = dict2List(nippon, (key, value) => [key, value.toUpperCase()])
const listRm = dict2List(nipponRm, (key, value) => [key, value.toUpperCase()])
for (let i = 0; i < list.length; i++) {
  list[i].romaji = listRm[i].key.toUpperCase()
}
const widths = [180, 200, 100, 100]

</script>

<template>
  <div class="colorname-list">
    <ColorNameItem :is-head="true" :name="titles.name" :name2="titles.name2" :color="titles.color"  :widths="widths" />
    <ColorNameItem v-for="item in list" :name="item.key" :key="item.key" :name2="item.romaji" :color="item.value" :widths="widths" />
  </div>
</template>

<style lang="scss" scoped>
.colorname-list {
  // display: grid;
  // grid-template-columns: 50% 50%;
}
@media screen and (max-width: 1000px) {
  .colorname-list {
    display: block;
    &__head2 {
      display: none
    }
  }
}
</style>