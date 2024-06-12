<template>
  <UContainer>
    <ProductsCar :data="favoriteItems" />
  </UContainer>
</template>

<script setup lang="ts">
const { getValue } = useCustomLocalStorage<string[]>("favoriteItems", []);
const savedItems = ref(getValue.value);
const data = useItems();
const favoriteItems = ref(
  data.filter((item) => savedItems.value.includes(item.id))
);
watch(
  getValue,
  (newValue) => {
    savedItems.value = newValue;
    console.log(savedItems.value);

    favoriteItems.value = data.filter((item) =>
      savedItems.value.includes(item.id)
    );
  },
  { immediate: true }
);
</script>
