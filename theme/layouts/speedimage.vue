<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
  imageWidth: {
    type: String,
    default: null,
  },
  imageRepeat: {
    type: Number,
    default: null,
  },
  imageOrientation: {
    type: String,
    default: null,
  },
  dim: {
    type: Boolean,
    default: true,
  },
})

const style = computed(() => handleBackground(props.background, props.dim, props.imageWidth, props.imageRepeat, props.imageOrientation))
</script>

<template>
  <div class="slidev-layout speedimage">
    <div class="inner-speedimage" :style="style">
      <div class="my-auto w-full">
        <slot />
      </div>
    </div>
    <div style="width: 350px"></div>
  </div>
</template>
