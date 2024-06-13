<template>
  <div v-if="images.length >= 1" class="grid gap-4">
    <div>
      <NuxtImg
        class="h-auto max-w-full rounded-lg card-img"
        :src="images[imgIndex]"
        alt=""
      />
    </div>
    <div
      class="flex flex-row flex-nowrap gap-4 overflow-x-scroll scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-blue-700 scrollbar-track-blue-200 scrollbar-h-"
    >
      <NuxtImg
        v-for="(ask, index) in images"
        class="max-w-full w-28 h-20 rounded-lg mb-3"
        :src="ask"
        @click="imgIndex = index"
        alt=""
      />
    </div>
  </div>
  <div v-else>
    <NuxtImg class="w-full h-1/2 rounded-md" src="khali.svg" />
  </div>
</template>

<script setup lang="ts">
const imgIndex = ref(0);
const props = defineProps<{
  images: string[];
}>();
</script>

<style scoped>
.card-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1.2/0.8;
}
</style>
