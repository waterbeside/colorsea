<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  boxColor: {
    type: String,
    default: '#000'
  },
  textColor: {
    type: String,
    default: '#fff'
  },
  minWidth: {
    type: Number,
    default: 100
  }
})

</script>

<template>
  <div class="colorbox" :style="{backgroundColor: boxColor, color: textColor, minWidth: minWidth + 'px'}">
    <slot></slot>
  </div>
</template>

<style scoped>
.colorbox {
  display: inline-block;
  min-height: 20px;
  border-radius: 5px;
  padding: 2px 12px;
}
</style>