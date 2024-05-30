<template>
  <div
    :class="scrollPhoneFooter"
    class="bg-white dark:bg-zinc-900 fixed z-50 bottom-0 left-0 right-0 md:hidden border-t border-gray-200 dark:border-gray-600"
  >
    <div class="flex flex-row-reverse justify-center items-center gap-12 py-4">
      <!-- ....1.... -->
      <section>
        <NuxtLink to="/">
          <div class="group flex flex-col justify-center items-center">
            <UIcon
              name="i-heroicons-magnifying-glass"
              class="group-hover:text-blue-500 text-2xl dark:text-gray-300 text-gray-500"
            ></UIcon>
            <span
              class="group-hover:text-blue-500 text-xs font-medium dark:text-gray-300 text-gray-500"
              >کاوش</span
            >
          </div>
        </NuxtLink>
      </section>
      <!-- ....1/.... -->
      <!-- ....2.... -->
      <section>
        <NuxtLink to="love">
          <div class="group flex flex-col justify-center items-center">
            <UIcon
              name="i-heroicons-heart"
              class="group-hover:text-blue-500 text-2xl dark:text-gray-300 text-gray-500"
            ></UIcon>
            <span
              class="group-hover:text-blue-500 text-xs font-medium dark:text-gray-300 text-gray-500"
              >لیست</span
            >
          </div>
        </NuxtLink>
      </section>
      <!-- ....2/.... -->
      <!-- ....3.... -->
      <section>
        <div>
          <div
            class="group flex flex-col justify-center items-center"
            @click="isOpen = true"
          >
            <UIcon
              name="i-heroicons-user-circle"
              class="group-hover:text-blue-500 text-2xl dark:text-gray-300 text-gray-500"
            ></UIcon>
            <span
              class="group-hover:text-blue-500 text-xs font-medium dark:text-gray-300 text-gray-500"
              >ورود</span
            >
            <!-- .. -->

            <!-- .. -->
          </div>

          <UModal v-model="isOpen">
            <div class="p-4 mx-auto container">
              <UContainer>
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
              </UContainer>
            </div>
          </UModal>
        </div>
      </section>
      <!-- ....3/.... -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
const isOpen = ref(false);
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
const scrollPhoneFooter = ref("");
const scrollresize = () => {
  if (window.scrollY > 50) {
    scrollPhoneFooter.value = "hidden transition-all  duration-300";
  } else if (window.scrollY < 50) {
    scrollPhoneFooter.value = " transition-all  duration-300";
  }
};
onMounted(() => {
  scrollresize();
  window.addEventListener("scroll", scrollresize);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollresize);
});
</script>
