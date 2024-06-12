<template>
  <section>
    <UContainer>
      <ProductsCar :data="data" />
      <AppPhone />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const data = useItems();
</script>

<style scoped>
.chap-chin {
  direction: ltr;
}
.rast-chin {
  direction: rtl;
}
</style>
