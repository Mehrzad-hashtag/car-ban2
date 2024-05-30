<template>
  <div class="flex justify-between items-center my-2">
    <UButton
      label="اطلاعات"
      class="py-2"
      :ui="{ rounded: 'rounded-full' }"
      color="blue"
      variant="solid"
    />

    <!-- <AppButton
      @click="isSaved = !isSaved"
      :icon="cardIcon"
      color="blue"
      size="md"
    /> -->
  </div>
</template>

<script setup lang="ts">
const isSaved = ref<boolean>(false);
const cardIcon = computed(() =>
  isSaved.value ? "i-heroicons-bookmark-20-solid" : "i-heroicons-bookmark"
);
</script>

<style scoped></style>
