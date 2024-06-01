<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
  data: any;
}>();
const isOpen = defineModel<boolean>({ default: false });
const items = ["/bm-3.jpg", "/bm-2.jpg", "/bm-3.jpg", "/bm-4.jpg", "/bm-4.jpg"];
</script>

<template>
  <div>
    <UModal v-model="isOpen">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex justify-between items-center">
            <span>اطلاعات</span>
            <UButton
              color="rose"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <section class="">
          <AppGallery :images="data.carImg" />
        </section>
        <UDivider class="mt-4" icon="i-heroicons-arrow-down-circle-16-solid" />
        <div>
          <span> اسم ماشین : {{ data.nameCar }}</span>
        </div>
        <div>
          <span>وضعیت بدنه : </span>
          <span class="text-green-500">{{ data.salamati }}</span>
        </div>
        <div>
          <span>وضعیت رنگ : </span>
          <span class="text-green-500">{{ data.vazeyat }}</span>
        </div>

        <template #footer>
          <NuxtLink to="love">
            <UButton :to="`/car/${data.id}`" color="gray" variant="ghost"
              >برای مشاهده جزئیات بیشتر کلیک کنید.</UButton
            >
          </NuxtLink>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<style scoped>
.chap-chin {
  direction: ltr;
}
.card-img {
  height: 100%;
  width: 100%;
  aspect-ratio: 1.2/0.8;
}
</style>
