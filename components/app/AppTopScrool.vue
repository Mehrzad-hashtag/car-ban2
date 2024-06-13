<template>
  <UButton
    id="scrollToTopBtn"
    v-show="showButton"
    @click="scrollToTop"
    class="group fixed bottom-5 left-5 z-10"
    :ui="{ rounded: 'rounded-full' }"
    icon="i-heroicons-arrow-up-16-solid"
    color="blue"
  ></UButton>
</template>

<script setup lang="ts">
const showButton = ref<boolean>(false);

const handleScroll = (): void => {
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
