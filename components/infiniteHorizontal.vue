<template>
  <div class="wrapper">
    <span
      :style="`animation-delay: calc(${delayDuration}s / ${length} * (${length} - ${+1}) * -1); position: absolute;
        width: ${itemsWidth}px;
        left: max(calc(${itemsWidth}px * ${length}), 100%);
        animation-name: scrollLeft;
        animation-duration: ${delayDuration}s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;`"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  itemsWidth: { type: Number, required: true },
  delayDuration: { type: Number, required: false, default: 2 },
  length: { type: Number, required: true },
  key: { type: Number, required: true },
});

const scrollLeftValue = `-${props.itemsWidth}px`;
</script>
<style>
*::before,
*::after {
  box-sizing: border-box;
}
.wrapper {
  width: 100%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  margin-top: 5rem;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 6%,
    rgba(0, 0, 0, 1) 94%,
    rgba(0, 0, 0, 0)
  );
}

@keyframes scrollLeft {
  to {
    left: v-bind(scrollLeftValue);
  }
}
</style>
