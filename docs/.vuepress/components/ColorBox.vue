<script setup lang="ts">
import { defineProps, computed } from 'vue'
import colorsea from '../../../src/index'

const props = defineProps({
  boxColor: {
    type: String,
    default: '#000'
  },
  textColor: {
    type: String,
    require: false
  },
  minWidth: {
    type: [Number, String],
    default: '1em'
  },
  alpha: {
    type: Number,
    require: false    
  },
  showBorder: {
    type: Boolean,
    default: true,
  }
})

const miniWidth = computed(() => {
  if (typeof props.minWidth === 'number') return props.minWidth + 'px'
  return props.minWidth
})

const bgColor = computed(() => {
  if (props.alpha !== void 0) return colorsea(props.boxColor, props.alpha)
  return colorsea(props.boxColor)
})

const fontColor = computed(() => {
  if (props.textColor) return props.textColor
  if (bgColor.value.brightness() > 50) return bgColor.value.alpha(100).mix('#000000', 30).darken(30).hex()
  return bgColor.value.alpha(100).mix('#ffffff', 40).lighten(30).hex()
})

const borderColor = computed(() => {
  return bgColor.value.mix('#000000', 10).darken()
})


</script>

<template>
  <div
    class="colorbox"
    :class="{'colorbox--border': showBorder}"
    :style="{
      backgroundColor: bgColor.hex(),
      color: fontColor,
      minWidth: miniWidth,
      '--border-color': borderColor.hex()
    }"
  >
    <slot :color="bgColor" :colorString="boxColor" ></slot>
  </div>
</template>

<style scoped lang="scss">
.colorbox {
  display: inline-flex;
  box-sizing: content-box;
  min-height: 1.2em;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 0.2em 0.5em;
  &--border {
    border: 1px solid var(--border-color)
  }
}
</style>