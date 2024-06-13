<template>
  <div
    class="grid md:gap-4 lg:gap-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-content-center group"
  >
    <div
      class="chapChin hover:-translate-y-4 ease-in-out duration-300 relative w-full lg:w-5/6 mx-auto"
      v-for="box in data"
      :key="box.id"
    >
      <ProductCarCard :box="box" />
    </div>
  </div>
  <!-- ..... -->
</template>
<script setup lang="ts">
const { cars: data } = useItems();
</script>
