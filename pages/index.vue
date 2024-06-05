<template>
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

  <!-- <div class="">
    <infiniteHorizontal
      :length="mehrzad.length"
      class="h-64"
      v-slot="slotProps"
      :itemsWidth="500"
    >
      <template v-for="(item, index) in mehrzad" :key="index">
        <div class="h-64 rounded-md bg-slate-900" :style="slotProps.itemStyle">
          <div>
            <span class="text-white"> {{ item.nameCar }} </span>
          </div>
        </div>
      </template>
    </infiniteHorizontal>
  </div> -->
  <!-- ... -->
  <!-- ... -->
</template>

<script setup lang="ts">
const mehrzad = useItems();
</script>

<style scoped>
.chap-chin {
  direction: ltr;
}
.rast-chin {
  direction: rtl;
}
</style>
