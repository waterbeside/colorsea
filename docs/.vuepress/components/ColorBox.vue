<template>
  <div class="colorbox" :style="{backgroundColor: boxColor, color: textColor}">
    <slot></slot>
  </div>
</template>


<script>
export default {
  props: {
    boxColor: {
      type: String,
      default: '#000'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  }
}

</script>

<style>
.colorbox {
  display: inline-block;
  min-height: 20px;
  border-radius: 5px;
  padding: 2px 12px;
}
</style>