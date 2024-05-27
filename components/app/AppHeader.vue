<template>
  <section>
    <!-- Mobile Navigation -->
    <nav class="relative shadow-sm md:hidden z-30">
      <div
        class="transition-all duration-300 fixed top-0 left-0 right-0 border-slate-100 dark:border-slate-800 border-b bg-white dark:bg-zinc-900"
      >
        <div class="flex items-center px-3 gap-4 mt-3">
          <SearchInput />
          <darkMode />
          <UButton
            icon="i-heroicons-adjustments-horizontal"
            :ui="{
              rounded: 'rounded-full',

              icon: {
                base: 'flex-shrink-0 text-white dark:bg-white dark:text-black',
              },
            }"
            class="px-2 py-2 bg-blue-500 hover:bg-blue-500 border dark:bg-blue-500 border-gray-100 dark:border-black"
            size="xl"
          />
        </div>
        <!-- Carousel -->
        <UCarousel
          v-slot="{ item }"
          :items="items"
          :ui="{
            item: 'basis-24',
            container: 'rounded-sm',
          }"
          class="w-full text-right md:w-full mx-auto"
        >
          <!-- <img :src="item" class="w-full" draggable="false" /> -->
          <NuxtLink to="/">
            <div
              class="group mt-6 mb-2 flex-wrap flex flex-col justify-center items-center md:container w-full mx-auto"
            >
              <UIcon
                :ui="{
                  icon: {
                    base: 'flex-shrink-0 text-black ',
                  },
                }"
                class="w-full px-8 mb-1 dark:text-gray-500 dark:group-hover:text-gray-300"
                :name="item.icon"
              />
              <span
                class="font-normal text-xs dark:group-hover:text-white dark:text-slate-300 group-hover:text-black group-hover:underline-offset-8 group-hover:underline group-hover:decoration-2 text-slate-600 text-center text-nowrap space-x-reverse space-x-4"
              >
                {{ item.description }}
              </span>
            </div>
          </NuxtLink>
        </UCarousel>
      </div>
    </nav>
  </section>

  <!-- Desktop Navigation -->
  <section>
    <nav class="shadow-sm hidden md:flex md:justify-center md:items-center">
      <div
        class="px-1 fixed lg:py-4 w-full bg-white dark:bg-zinc-900 z-40"
        :class="sizeMdHeader"
      >
        <UContainer>
          <div class="flex flex-row-reverse">
            <div
              class="flex flex-row-reverse justify-start items-center w-3/4 lg: md:mb-7 gap-4 lg:mb-4"
            >
              <div
                class="rounded-3xl flex justify-around items-center w-4/12 lg:w-2/12 border"
              >
                <!-- .... -->
                <UPopover>
                  <AppButton />
                  <template #panel>
                    <div class="p-2 w-full">
                      <div
                        class="flex flex-col gap-1 justify-start items-start w-full z-50"
                      >
                        <UButton
                          variant="ghost"
                          color="blue"
                          class="w-full"
                          @click="isOpen = true"
                          >ورود</UButton
                        >
                        <UButton variant="ghost" color="blue" class="w-full"
                          >ثبت نام</UButton
                        >
                      </div>

                      <Placeholder class="h-20 w-full" />
                    </div>
                  </template>
                </UPopover>

                <!-- .... -->
                <AppButton icon="i-heroicons-user-circle-16-solid" />
                <!-- ....... -->
                <div>
                  <UModal v-model="isOpen">
                    <div class="p-4 rounded-xl">
                      <UForm
                        :schema="schema"
                        :state="state"
                        class="space-y-4"
                        @submit="onSubmit"
                      >
                        <UFormGroup label="ایمیل" name="email">
                          <UInput v-model="state.email" />
                        </UFormGroup>

                        <UFormGroup label="رمز " name="password">
                          <UInput v-model="state.password" type="password" />
                        </UFormGroup>

                        <UButton color="blue" type="submit"> ارسال </UButton>
                      </UForm>
                      <Placeholder class="h-48" />
                    </div>
                  </UModal>
                </div>
                <!-- ....... -->
              </div>
              <!-- Dark Mode Button -->
              <darkMode />

              <NuxtLink to="/">
                <p
                  class="text-black dark:text-white text-nowrap text-base mr-4"
                >
                  <span class="text-xl text-blue-500">ماشینت </span> اینجاست.
                </p>
              </NuxtLink>
            </div>
            <!-- Logo -->
            <div class="flex items-center gap-4 justify-start w-11/12">
              <img class="w-36 h-16 md:mb-7 lg:mb-4" src="/img/bmwmm.png" />
              <h2
                class="hidden lg:block text-blue-500 font-bold fon text-2xl font-sans lg:mb-4"
              >
                <span class="text-blue-600">C</span>ar<span
                  class="text-blue-600"
                  >B</span
                >an
              </h2>
              <!-- Navigation Buttons -->
              <div
                class="flex lg:flex-row-reverse md:mt-3 lg:mt-0 md:flex-col-reverse lg:gap-4 md:gap-0 items-baseline justify-center"
              >
                <div
                  :class="handleButtonScale"
                  class="flex justify-center items-center gap-1 pb-3 w-4/12 lg:mb-4"
                >
                  <UButton color="gray" variant="ghost">محل ماشین</UButton>
                  <UButton color="gray" variant="ghost">تجربیات</UButton>
                  <UButton color="gray" variant="ghost"
                    >تجربیات از طریق وب</UButton
                  >
                </div>
                <search-input
                  v-model="inputValue"
                  :class="sizeSmHeader"
                  class="md:w-10/12 lg:w-8/12"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div :class="resizeInput">
              <search-input
                :value="inputValue"
                @input="updateInputValue($event.target.value)"
                class="lg:w-1/2 md:w-2/3 mb-2"
              />
            </div>
          </div>
        </UContainer>
      </div>
    </nav>
  </section>

  <!-- ....... -->
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
const inputValue: Ref<string> = ref("sadsa");

const updateInputValue = (newValue: string) => {
  inputValue.value = newValue;
};

const schema = z.object({
  email: z.string().email("ایمیل نامعتبر"),
  password: z.string().min(8, "باید حداقل 8 کاراکتر باشد"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
const items = [
  {
    icon: "i-heroicons-truck-solid",
    description: "ماشین",
  },
  {
    icon: "i-heroicons-shopping-bag-solid",
    description: "فروشگاه",
  },
  {
    icon: "i-heroicons-wrench-screwdriver-solid",
    description: "دیزاین",
  },
  {
    icon: "i-heroicons-hand-raised-20-solid",
    description: "گاراژ اسپورت",
  },
  {
    icon: "i-heroicons-gift-solid",
    description: "اوتوگالری",
  },
  {
    icon: "i-heroicons-credit-card-20-solid",
    description: "قیمت",
  },
  {
    icon: "i-heroicons-circle-stack-20-solid",
    description: "خلافی",
  },
  {
    icon: "i-heroicons-clipboard-document-solid",
    description: "قولنامه",
  },
  {
    icon: "i-heroicons-currency-dollar-solid",
    description: "بورس",
  },
  {
    icon: "i-heroicons-building-library-solid",
    description: "اقساطی",
  },
];

const handleButtonScale = ref("");
const resizeInput = ref("");
const sizeMdHeader = ref("");
const sizeSmHeader = ref("hidden");
const isOpen = ref(false);

const scrollAndResize = () => {
  if (window.scrollY > 50) {
    resizeInput.value = "scale-0 duration-300";
    sizeSmHeader.value = "block duration-300";
    handleButtonScale.value = " scale-0 -translate-y-14 duration-300 ";
    sizeMdHeader.value = "h-20 mt-20 ease-in-out overflow-hidden";
  } else if (window.scrollY < 50) {
    resizeInput.value = "block  duration-300";
    sizeSmHeader.value = "scale-0 translate-y-14 duration-300";
    handleButtonScale.value = "block duration-300 ";
    sizeMdHeader.value = "h-46 mt-44 ";
  }
};
onMounted(() => {
  scrollAndResize();
  window.addEventListener("scroll", scrollAndResize);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollAndResize);
});
</script>

<style scoped>
.chap-chin {
  direction: ltr;
}
</style>
