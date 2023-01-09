
<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: String,
  color: String,
  name2: String,
  isHead: {
    type: Boolean,
    default: false
  },
  widths: {
    type: Array,
    default: [150, 100, 80, 80]
  }
})

const isShowName2 = props?.name2 !== void 0
console.log('props', props)

const widthStyle: {[key: string]: string} = {}
for (let i = 0; i < props.widths.length; i++) {
  const w = props.widths[i]
  widthStyle[`--w${i+1}`] = typeof w === 'string' ? w : w + 'px'
}
</script>

<template>
  <dl class="colorname-item" :class="{head: isHead}" :style="widthStyle">
    <dt>{{ name }}</dt>
    <dd v-if="isShowName2"> {{ name2 }} </dd>
    <dd>{{ color }}</dd>
    <dd  v-if="isHead" >-</dd>
    <dd v-else class="color" :style="{background: color}"></dd>
  </dl>
</template>

<style lang="scss" scoped>
.colorname-item {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: 0;
  dt {
    width: var(--w1);
    font-weight: 500;
  }
  @for $i from 2 through 4 {
    dd:nth-child(#{$i}) { width: var(--w#{$i}) }
  }

  dt, dd {
    border: 1px solid #ddd;
    margin: 0;
    padding: 4px 10px;
  }

  &.head {
    dt, dd {
      background-color: #f0f0f0;
      border-bottom: 3px solid #ccc;
    }
  }
  
  
}

</style>