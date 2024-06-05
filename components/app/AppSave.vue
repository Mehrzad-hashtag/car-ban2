<template>
  <AppButton
    @click="isSaved = !isSaved"
    :icon="cardIcon"
    color="blue"
    size="md"
  />
</template>

<script setup lang="ts">
// const props = defineProps<{
//   isSaved: boolean;
// }>();
const isSaved = ref<boolean>(false);
const cardIcon = computed(() =>
  isSaved.value ? "i-heroicons-bookmark-20-solid" : "i-heroicons-bookmark"
);
</script>

<style scoped></style>
