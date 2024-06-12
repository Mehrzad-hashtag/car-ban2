<template>
  <UContainer>
    <span v-if="favoriteItems.length >= 1">
      <ProductsCar :data="favoriteItems" />
    </span>
    <div class="flex flex-col justify-center items-center" v-else>
      <NuxtImg class="w-full md:w-3/6 rounded-3xl" src="khali.svg" />

      <UButton to="/" class="py-2 my-4" size="xl" color="gray" variant="ghost"
        >خودرویی وجود ندارد ...</UButton
      >
    </div>
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

    favoriteItems.value = data.filter((item) =>
      savedItems.value.includes(item.id)
    );
  },
  { immediate: true }
);
</script>
