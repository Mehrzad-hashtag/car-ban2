<template>
  <div class="wrapper mb-20">
    <template v-for="(item, index) in data">
      <slot
        :item="item"
        :itemStyle="`animation-delay: calc(${delayDuration}s / ${
          data.length
        } * (${data.length} - ${index + 1}) * -1); position: absolute;
        width: ${itemsWidth}px;
        left: max(calc(${itemsWidth}px * ${data.length}), 100%);
        animation-name: scrollLeft;
        animation-duration: ${delayDuration}s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;`"
      ></slot>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: { type: Array, required: true },
  itemsWidth: { type: Number, required: true },
  delayDuration: { type: Number, required: false, default: 20 },
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
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

@keyframes scrollLeft {
  to {
    left: v-bind(scrollLeftValue);
  }
}
</style>
