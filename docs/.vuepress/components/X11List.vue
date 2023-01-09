
<script lang="ts" setup>
import { defineProps } from 'vue'
import { dict2List } from '../utils'
import x11 from '../../../src/colors/x11'
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
    color: 'Hex'
  },
  en: {
    name: 'Color name',
    color: 'Hex'
  }
}

const list = dict2List(x11, (key, value) => [key, value.toUpperCase()])
const widths = [180, 80, 80, 80]

</script>

<template>
  <div class="colorname-list">
    <ColorNameItem :is-head="true" :name="headTitles[props.lang].name" :color="headTitles[props.lang].color"  :widths="widths" />
    <ColorNameItem class="colorname-list__head2" :is-head="true" :name="headTitles[lang].name" :color="headTitles[lang].color"  :widths="widths" />
    <ColorNameItem v-for="item in list" :key="item.key" :name="item.key" :color="item.value" :widths="widths" />
  </div>
</template>

<style lang="scss" scoped>
.colorname-list {
  display: grid;
  grid-template-columns: 50% 50%;
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