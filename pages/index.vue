<template>
  <div>
    <div
      class="shadow-sm hidden md:flex md:justify-center md:items-center mb-16 md:w-full"
    >
      <div
        class="fixed md:w-full border-b-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-zinc-900 z-30"
        :class="carouselTow"
      >
        <UContainer>
          <div class="w-full flex flex-row-reverse justify-around items-center">
            <UButton
              :ui="{ rounded: 'rounded-2xl' }"
              icon="i-heroicons-adjustments-horizontal-20-solid"
              size="lg"
              color="white"
              variant="solid"
              label="فیلتر کنید"
              trailing
            />
            <div class="w-8/12 chap-chin">
              <UCarousel
                v-slot="{ item }"
                :items="items"
                :ui="{
                  item: 'basis-28',
                  container: 'rounded-sm',
                }"
                :prev-button="{
                  color: 'gray',
                  icon: 'i-heroicons-arrow-left-20-solid',
                  class: '-left-9 text-blue-500  bg-blue-50',
                }"
                :next-button="{
                  color: 'gray',
                  icon: 'i-heroicons-arrow-right-20-solid',
                  class: '-right-9 text-blue-500 bg-blue-50',
                }"
                arrows
                class="w-full text-right md:w-full"
              >
                <NuxtLink to="/">
                  <div
                    class="group mt-6 mb-2 z-50 flex-wrap flex flex-col justify-center items-center md:container mx-auto"
                  >
                    <UIcon
                      :ui="{
                        icon: {
                          base: 'flex-shrink-0 text-black dark:text-black',
                        },
                      }"
                      class="w-6 h-6 mb-1"
                      :name="item.icon"
                    />
                    <span
                      class="text-xs group-hover:text-black text-slate-400 group-hover:underline-offset-8 group-hover:underline group-hover:decoration-2 text-center text-nowrap space-x-reverse space-x-4"
                    >
                      {{ item.description }}
                    </span>
                  </div>
                </NuxtLink>
              </UCarousel>
            </div>
          </div>
        </UContainer>
      </div>
    </div>
  </div>
  <!-- ... -->
  <section>
    <UContainer>
      <ProductsCar />
    </UContainer>
  </section>
  <!-- ... -->
  <!-- ... -->
  <section>
    <AppPhone />
  </section>
  <!-- ... -->
  <!-- ... -->
  <section>
    <infiniteHorizontal
      class="h-64"
      v-slot="slotProps"
      :data="mehrzad"
      :itemsWidth="300"
    >
      <div
        class="h-32 rounded-md bg-blue-600 flex flex-row justify-start px-2 py-2 items-center"
      >
        <NuxtLink :to="slotProps.item.path">
          <div class="w-2/3">
            <p class="text-white">{{ slotProps.item.nameCar }}</p>
            <p class="text-gray-300">{{ slotProps.item.para }}</p>
            <span class="text-gray-300"
              ><span class="text-white"> قیمت : </span
              >{{ slotProps.item.price }}</span
            >
          </div>
        </NuxtLink>
        <div class="w-2/3">
          <img class="w-full h-full" :src="slotProps.item.ask" alt="222" />
        </div>
      </div>
    </infiniteHorizontal>
  </section>
  <html className="scrollbar-thumb-sky-700 scrollbar-track-sky-300">
    <!-- ... -->
    <div className="scrollbar-thin h-32 overflow-y-scroll">
      <div className="h-64 bg-slate-400">sad</div>
    </div>
    <!-- ... -->
  </html>
  <!-- ... -->
</template>

<script setup>
const items = [
  {
    icon: "i-heroicons-truck-solid",
    description: "ماشین",
    add: "https://translate.google.com",
  },
  {
    icon: "i-heroicons-shopping-bag-solid",
    description: "فروشگاه",
  },
  {
    icon: "i-heroicons-wrench-screwdriver-solid",
    description: "دیزاین",
  },
  {
    icon: "i-heroicons-hand-raised-20-solid",
    description: "گاراژ اسپورت",
  },
  {
    icon: "i-heroicons-gift-solid",
    description: "اوتوگالری",
  },
  {
    icon: "i-heroicons-credit-card-20-solid",
    description: "قیمت",
  },
  {
    icon: "i-heroicons-circle-stack-20-solid",
    description: "خلافی",
  },
  {
    icon: "i-heroicons-clipboard-document-solid",
    description: "قولنامه",
  },
  {
    icon: "i-heroicons-currency-dollar-solid",
    description: "بورس",
  },
  {
    icon: "i-heroicons-building-library-solid",
    description: "اقساطی",
  },
];
const mehrzad = [
  {
    id: 1,
    nameCar: "فونیکس",
    para: "1.8 لیتر توربو",
    price: "1000000000",
    path: "/love",
    aks: "/img/aa.png",
  },
  {
    id: 2,
    nameCar: "کی ام سی",
    para: "1.9 لیتر توربو",
    price: "2000000000",
    aks: "/img/aa.png",
  },
  {
    id: 3,
    nameCar: "ساینا",
    para: "2.0 لیتر توربو",
    price: "500000000",
    aks: "/img/aa.png",
  },
  {
    id: 4,
    nameCar: "405",
    para: "1.5 لیتر توربو",
    price: "450000000",
  },
  {
    id: 5,
    nameCar: "bmw",
    para: "1.6 لیتر توربو",
    price: "5000000000",
  },
];
const carouselTow = ref("");
const scrollAnd = () => {
  if (window.scrollY < 50) {
    carouselTow.value = "mb-4";
  } else if (window.scrollY > 50) {
    carouselTow.value = "mb-48 ";
  }
};
onMounted(() => {
  scrollAnd();
  window.addEventListener("scroll", scrollAnd);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollAnd);
});
</script>

<style scoped>
.chap-chin {
  direction: ltr;
}
.rast-chin {
  direction: rtl;
}
</style>
