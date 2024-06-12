<template>
  <button
    id="scrollToTopBtn"
    class="group fixed bottom-5 left-5 z-10 rounded-full bg-blue-500 text-white bg-banafh p-4 hover:text-blue-600 transition-all"
    v-show="showButton"
    @click="scrollToTop"
  >
    <NuxtImg
      class="w-4 h-4 bg-black"
      src="i-heroicons-arrow-up-16-solid"
    ></NuxtImg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const showButton = ref<boolean>(false);

const handleScroll = (): void => {
  //window.pageYOffset
  if (window.scrollY > 20) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
};

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted((): void => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount((): void => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
