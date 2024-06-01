<template>
  <div
    class="grid md:gap-4 lg:gap-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-content-center group"
  >
    <div
      class="chapChin hover:-translate-y-4 ease-in-out duration-300 relative w-full lg:w-5/6 mx-auto"
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
          <img class="caca rounded-t-lg" :src="item" alt="" />
        </div>
      </UCarousel>
      <!-- ...1/... -->
      <!-- ...2... -->
      <section>
        <div
          class="card dark-mode light-mode mb-12 shadow-lg dark:shadow-zinc-800 dark:drop-shadow-md rounded-b-lg"
        >
          <div class="card-info rastChin">
            <p class="text-title">{{ box.nameCar }}</p>
            <p class="text-body">{{ box.Description }}</p>
          </div>
          <UDivider icon="i-heroicons-arrow-down-circle-16-solid" />
          <div class="card-footer rastChin">
            <span
              v-if="box.tavafogi"
              class="text-blue-500 dark:text-blue-400 font-medium"
            ></span>
            <span v-else class="text-title"
              >قیمت :
              <span class="text-gray-600 dark:text-gray-400 text-base">{{
                nFormat.format(+box.price)
              }}</span></span
            >
            <div>
              <UButton
                class="mt-4"
                @click="handleModal(box)"
                label="اطلاعات"
                color="blue"
              >
              </UButton>
            </div>
          </div>
        </div>
      </section>
      <!-- ...2/... -->
      <!-- ...3... -->
      <section class="mx-auto"></section>
      <!-- ...3/... -->
    </div>
    <CarModal v-model="isOpen" :data="carDetail"></CarModal>
  </div>
  <!-- ..... -->
</template>
<script setup lang="ts">
const isOpen = ref(false);
const carDetail = ref({});
const items = [
  {
    id: "1",
    nameCar: "bmw",
    Description: "به میزبانی کارل فردریکسن",
    price: "12000000",
    carImg: ["/bm-1.jpg", "ww.webp", "pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },

  {
    id: "2",
    nameCar: "پرشیا ",
    Description: "به میزبانی کارل فردریکسن",
    tavafogi: true,
    price: "0",
    carImg: ["bm-2.jpg", "pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "55200000",
    carImg: ["bm-3.jpg", "pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "بنز ",
    Description: "به میزبانی کارل فردریکسن",
    tavafogi: true,

    price: "0",
    carImg: ["bm-4.jpg", "pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
  {
    nameCar: "سمند ",
    Description: "به میزبانی کارل فردریکسن",
    price: "0",
    carImg: ["pride.webp", "/sa.jpg"],
    salamati: "سالم",
    vazeyat: "بیرنگ",
  },
];
const nFormat = new Intl.NumberFormat();

const handleModal = (car: any) => {
  carDetail.value = car;
  isOpen.value = true;
  console.log(car);
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
  height: 190px;
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
