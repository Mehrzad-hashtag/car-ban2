<template>
  <UContainer>
    <div
      class="flex border dark:border-zinc-800 rounded-lg p-2 md:justify-between justify-center flex-col items-start md:flex-row-reverse mx-auto my-10 gap-3"
    >
      <div class="md:w-1/2 w-full">
        <AppGallery
          class="bg-gray-50 dark:bg-zinc-900"
          :images="car?.carImg"
        ></AppGallery>
      </div>
      <section class="md:w-2/3 w-full">
        <div class="flex justify-start items-start flex-row gap-10 w-full">
          <div class="flex flex-col w-1/2">
            <p class="font-semibold dark:text-white text-black">
              اسم ماشین :
              <span class="font-normal text-green-500">
                {{ car?.nameCar }}</span
              >
            </p>
            <p class="font-semibold dark:text-white text-black">
              قیمت :
              <span class="font-normal text-green-500">{{
                nFormat.format(+car?.price)
              }}</span>
            </p>
            <p class="font-semibold dark:text-white text-black">
              توضیحات :
              <span class="font-normal text-green-500">{{
                car?.Description
              }}</span>
            </p>
          </div>
          <div class="flex flex-col w-1/2">
            <p class="font-semibold dark:text-white text-black">
              تاریخ تولید :
              <span class="font-normal text-green-500">
                {{ car?.tarikh }}
              </span>
            </p>
            <p class="font-semibold dark:text-white text-black">
              بیمه :
              <span class="font-normal text-green-500">
                {{ car?.bime }}
              </span>
            </p>
            <p class="font-semibold dark:text-white text-black">
              مصافت طی شده :
              <span class="font-normal text-green-500"> {{ car?.km }} </span>
            </p>
          </div>
        </div>
        <UDivider class="mt-4" icon="i-heroicons-arrow-down-circle-16-solid" />
      </section>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const items = useItems();
const nFormat = new Intl.NumberFormat();

const car = items.find((m) => m.id === route.params.id);
</script>

<style scoped>
.card-img {
  height: 100%;
  width: 100%;
  aspect-ratio: 1.2/0.8;
}
</style>
