<template>
  <div>
    <div
      class="shadow-sm hidden md:flex md:justify-center md:items-center mb-16 md:w-full z-50"
    >
      <div
        class="fixed md:w-full border-b-2 border-slate-100 dark:border-slate-800 bg-gray-50 dark:bg-zinc-900 z-30"
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
</template>

<script setup lang="ts">
const carouselTow = ref("");
const scrollAnd = () => {
  if (window.scrollY < 50) {
    carouselTow.value = "mb-4 ";
  } else if (window.scrollY > 50) {
    carouselTow.value = "mb-[11.1rem] ";
  }
};
onMounted(() => {
  scrollAnd();
  window.addEventListener("scroll", scrollAnd);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollAnd);
});
const items = useMakane();
</script>

<style scoped></style>
