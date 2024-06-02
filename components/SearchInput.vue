<template>
  <div
    class="container mx-auto shadow-md flex flex-row-reverse justify-center items-center w-10/12 border pr-3 bg-white dark:bg-zinc-900 border-blue-100 dark:border-gray-500 rounded-full px-1 py-2"
  >
    <UInput
      v-model="search"
      class="w-full text-center"
      placeholder="دنبال چی میگردی؟"
      :ui="{
        placeholder: 'placeholder-black dark:placeholder-white',

        icon: {
          base: 'flex-shrink-0 text-white dark:text-white',
        },
      }"
      variant="none"
    />
    <div class="bg-blue-500 flex justify-center items-center rounded-full p-2">
      <Icon
        class="text-white"
        size="1.5rem"
        name="i-heroicons-magnifying-glass-20-solid"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const search = defineModel<any>("search");
</script>
