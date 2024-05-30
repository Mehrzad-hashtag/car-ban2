<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
const isOpen = defineModel<boolean>({ default: false });
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
            <UButton color="gray" variant="ghost"
              >برای مشاهده جزئیات بیشتر کلیک کنید.</UButton
            >
          </NuxtLink>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<style scoped></style>
