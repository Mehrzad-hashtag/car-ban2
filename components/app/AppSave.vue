<template>
  <AppButton @click="handleSave" :icon="cardIcon" color="blue" size="md" />
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

// Define the component's props
const props = defineProps({
  id: { type: String, required: true },
});

// Use custom local storage
const { getValue, setValue } = useCustomLocalStorage("favoriteItems", []);
const isSaved = ref<boolean>(false);

// Computed property to determine the icon based on saved state
const cardIcon = computed(() =>
  isSaved.value ? "i-heroicons-bookmark-20-solid" : "i-heroicons-bookmark"
);

// Update the saved state based on local storage
const updateSavedState = () => {
  const savedItems = getValue.value;
  isSaved.value = savedItems.includes(props.id);
};

// Watch the local storage value for changes
watch(getValue, updateSavedState, { immediate: true });

// Handle save action
const handleSave = () => {
  const items = getValue.value as string[];
  if (isSaved.value) {
    // Remove the item if it is already saved
    setValue(items.filter((item) => item !== props.id));
  } else {
    // Add the item if it is not saved
    items.push(props.id);
    setValue(items);
  }
  isSaved.value = !isSaved.value;
};
// Initialize the saved state on component mount
updateSavedState();
</script>

<style scoped></style>
