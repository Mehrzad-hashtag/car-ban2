<template>
  <AppButton @click="handleSave" :icon="cardIcon" color="blue" size="md" />
</template>
<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
});
const { getValue, setValue } = useCustomLocalStorage<string[]>(
  "favoriteItems",
  []
);
const isSaved = ref<boolean>(false);
const cardIcon = computed(() =>
  isSaved.value ? "i-heroicons-bookmark-20-solid" : "i-heroicons-bookmark"
);
const updateSavedState = () => {
  const savedItems = getValue.value;
  isSaved.value = savedItems.includes(props.id);
};
watch(getValue, updateSavedState, { immediate: true });
const handleSave = () => {
  const items = getValue.value as string[];
  if (isSaved.value) {
    setValue(items.filter((item) => item !== props.id));
  } else {
    items.push(props.id);
    setValue(items);
  }
  isSaved.value = !isSaved.value;
};
updateSavedState();
</script>
<style scoped></style>
