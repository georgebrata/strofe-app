<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <section class="bg-white py-10 sm:py-20">
    <div class="px-4 sm:px-0 container mx-auto">
      <div class="text-center sm:mx-auto sm:max-w-xl">
        <h2 class="text-4xl font-semibold text-gray-700 dark:text-gray-100 transition-colors">
          {{ title }}
        </h2>
        <p class="mt-2 text-lg text-gray-700 dark:text-gray-100 transition-colors">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>