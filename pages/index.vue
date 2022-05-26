<script setup lang="ts">
import { onMounted } from 'vue';
import { currentTheme, initTheme, switchTheme } from '@/composables/theme.js';

onMounted(() => {
  initTheme();
});
const { data } = await useFetch("/api/homepage", {});
</script>

<template>
    <div>
      <HeroSection v-bind="data.hero" />

      <HomeAbout v-bind="data.about" />

      <SectionHeader v-bind="data.feature" id="feature" />

      <HomeFeatures :features="data.features" />

      <HomeQuote v-bind="data.quote" />

      <ContactForm v-bind="data.contact" />
    </div>
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-50;
}
</style>
