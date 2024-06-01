<template>
  <div>
    {{ $route.params }}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const car = items.find((c) => c.id === route.params.id);
</script>

<style lang="scss" scoped></style>
