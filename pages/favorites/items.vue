<template>
  <UContainer>
    <span v-if="favLength >= 1">
      <div class="back h-24 flex justify-center items-center rounded-sm mb-8">
        <p class="text-2xl font-bold">خودرو های ذخیره شده ...</p>
      </div>
      <ProductCarCard v-for="(value, key) in favCars" :key="key" :box="value" />
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
const { favCars, favLength } = useItems();
</script>
