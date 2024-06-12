<template>
  <div
    class="grid md:gap-4 lg:gap-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-content-center group"
  >
    <div
      class="chapChin hover:-translate-y-4 ease-in-out duration-300 relative w-full lg:w-5/6 mx-auto"
      v-for="box in data"
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
        class="overflow-hidden"
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
        <div class="card-img rounded-t-3xl">
          <NuxtImg class="caca rounded-t-lg" :src="item" alt="" />
        </div>
      </UCarousel>
      <!-- ...1/... -->
      <!-- ...2... -->
      <section>
        <div
          class="card dark-mode light-mode mb-12 shadow-lg dark:shadow-zinc-800 dark:drop-shadow-md rounded-b-lg"
        >
          <div class="card-info rastChin space-y-2">
            <p class="font-semibold text-lg">
              اسم خودرو :
              <span class="text-xl text-blue-500 dark:text-blue-500">
                {{ box.nameCar }}
              </span>
            </p>
            <p class="font-semibold text-lg">
              مکان خودرو :
              <span class="text-xl text-blue-500 dark:text-blue-500">
                {{ box.makan }}
              </span>
            </p>
          </div>
          <UDivider
            class="my-2"
            icon="i-heroicons-arrow-down-circle-16-solid"
          />
          <div class="card-footer rastChin">
            <span v-if="box.tavafogi" class="text-title">
              قیمت :
              <span class="text-blue-500 dark:text-blue-400 font-medium"
                >توافقی</span
              >
            </span>
            <span v-else class="text-title"
              >قیمت :
              <span class="text-gray-600 dark:text-gray-400 text-base">{{
                nFormat.format(+box.price)
              }}</span></span
            >
            <div class="flex justify-between items-baseline">
              <UButton
                class="mt-4"
                @click="handleModal(box)"
                label="اطلاعات"
                color="blue"
              >
              </UButton>

              <AppSave :id="box.id" />
            </div>
          </div>
        </div>
      </section>
      <!-- ...2/... -->
    </div>
    <CarModal v-model="isOpen" :data="carDetail"></CarModal>
  </div>

  <!-- ..... -->
</template>
<script setup lang="ts">
import { type Car } from "../types/car.interface";

const props = defineProps({
  data: {
    type: Array as PropType<Car[]>,
    required: true,
  },
});
const isOpen = ref(false);
const carDetail = ref({});
const nFormat = new Intl.NumberFormat();
const handleModal = (car: any) => {
  carDetail.value = car;
  isOpen.value = true;
};
</script>

<style scoped>
.rastChin {
  direction: rtl;
}
.chapChin {
  direction: ltr;
}
.card {
  height: 220px;
  padding: 0.8em;
  position: relative;
  overflow: visible;
}

.card-img {
  height: 100%;
  width: 100%;
  aspect-ratio: 1.2/0.8;
}
.caca {
  height: 100%;
  width: 100%;
}

.card-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  padding-top: 10px;
}

/*Text*/
.text-title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
}

.text-body {
  font-size: 0.9em;
  padding-bottom: 10px;
}
</style>
