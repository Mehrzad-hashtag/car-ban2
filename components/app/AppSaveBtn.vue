<template>
  <div
    class="flex justify-between flex-row-reverse items-center absolute lg:bottom-64 md:bottom-full bottom-48 pt-2 md:pt-7 left-4 right-2 top-0"
  >
    <UButton
      label="اطلاعات"
      class="py-2"
      :ui="{ rounded: 'rounded-full' }"
      color="blue"
      variant="solid"
    />

    <AppButton
      @click="isSaved = !isSaved"
      :icon="cardIcon"
      color="blue"
      size="md"
    />
  </div>
</template>

<script setup lang="ts">
const isSaved = ref<boolean>(false);
const cardIcon = computed(() =>
  isSaved.value ? "i-heroicons-bookmark-20-solid" : "i-heroicons-bookmark"
);
</script>

<style scoped></style>
