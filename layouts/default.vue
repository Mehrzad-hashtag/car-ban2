<template>
  <div>
    <div class="mb-40 md:mb-52">
      <AppHeader />
    </div>

    <div class="z-0">
      <slot />
      <AppFooter />
    </div>
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "preconnect",
      href: "//fdn.fontcdn.ir",
    },
    {
      rel: "preconnect",
      href: "//v1.fontapi.ir",
    },
    {
      rel: "stylesheet",
      href: "https://v1.fontapi.ir/css/Vazir",
    },
  ],
});

const selected = ref(true);
function handleicon() {
  selected.value = !selected.value;
}
</script>
<style>
body {
  font-family: "vazir";
}
</style>
