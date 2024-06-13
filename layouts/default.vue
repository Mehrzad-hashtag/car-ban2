<template>
  <div>
    <div class="mb-40 md:mb-52">
      <AppHeader />
    </div>
    <AppMakan></AppMakan>

    <div class="z-0">
      <slot />
      <LazyAppFooter />
    </div>
  </div>
  <AppTopScrool />
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
</script>
<style>
body {
  font-family: "vazir";
}
</style>
