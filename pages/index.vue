<template>
  <section>
    <UContainer>
      <ProductsCar />
      <AppPhone />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { cars: data } = useItems();
</script>

<style scoped>
.chap-chin {
  direction: ltr;
}
.rast-chin {
  direction: rtl;
}
</style>
