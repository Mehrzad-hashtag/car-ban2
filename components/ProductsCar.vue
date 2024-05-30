<script setup lang="ts">
import { boolean } from "zod";

const items = [
  {
    id: "1",
    nameCar: "پراید",
    Description: "به میزبانی کارل فردریکسن",
    price: "12000000",
    carImg: ["ww.webp", "pride.webp", "/sa.jpg", "pride.webp", "/sa.jpg"],
  },
  {
    id: "2",
    nameCar: "پرشیا ",
    Description: "به میزبانی کارل فردریکسن",
    tavafogi: true,
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "55200000",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
  },
];
const nFormat = new Intl.NumberFormat();
</script>

<template>
  <div
    class="grid md:gap-4 lg:gap-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-content-center"
  >
    <div
      class="chapChin relative w-full lg:w-5/6 mx-auto"
      v-for="box in items"
      :key="box.id"
    >
      <!-- ...1... -->
      <UCarousel
        v-slot="{ item }"
        :items="box.carImg"
        :ui="{
          item: 'basis-full border border-slate-100 dark:border-slate-900  bg-white',
          indicators: {
            wrapper:
              'absolute flex items-center justify-center gap-2 py-1 truncate rounded-full   mx-10 md:mx-10  bottom-1  inset-x-0',
            base: 'rounded-full h-2 w-2  ',
            active: 'bg-white dark:bg-white  w-3 h-3 ',
            inactive: 'bg-white dark:bg-gray-800  mix-blend-overlay',
          },
        }"
        class="rounded-lg overflow-hidden"
        indicators
        :prev-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: '-left-12',
        }"
        :next-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          class: '-right-12',
        }"
      >
        <img
          :src="item"
          class="w-full h-40 object-cover md:object-cover transition-all"
          draggable="false"
        />
      </UCarousel>
      <!-- ...1/... -->
      <!-- ...2... -->
      <section>
        <div
          class="rastChin flex flex-col justify-start items-start mb-4 gap-1"
        >
          <h3 class="text-md">{{ box.nameCar }}</h3>
          <span class="text-sm dark:text-gray-400 text-gray-500">{{
            box.Description
          }}</span>

          <span
            v-if="box.tavafogi"
            class="text-blue-500 dark:text-blue-400 font-medium"
          >
            توافقی
          </span>
          <span v-else class="text-gray-500 dark:text-gray-400 font-medium"
            >قیمت:
            <span class="text-black dark:text-white">{{
              nFormat.format(+box.price)
            }}</span></span
          >
        </div>
      </section>
      <!-- ...2/... -->
      <!-- ...3... -->
      <section class="mx-auto">
        <AppSaveBtn />
      </section>
      <!-- ...3/... -->
    </div>
  </div>
</template>

<style scoped>
.rastChin {
  direction: rtl;
}
.chapChin {
  direction: ltr;
}
</style>
