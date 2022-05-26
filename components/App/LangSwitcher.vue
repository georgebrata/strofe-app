<script setup lang="ts">
import IconGlobe from '~icons/ri/globe-line';
import IconArrowDown from '~icons/ri/arrow-down-s-line';

const langs = ["en", "ro"];
</script>

<template>
  <Dropdown right>
    <template #activator>
      <DropdownButton
        as="button"
        type="button"
        class="text-gray-600 hover:bg-gray-200 hover:text-indigo-500 px-2 py-2 rounded"
        v-slot="{ open }"
      >
        <span
          :class="[open ? 'text-indigo-500' : '']"
          class="flex items-center gap-2"
        >
          <!-- <IconGlobe class="i-ri-user-line w-5 h-5" /> -->
          <span class="hidden sm:inline">🇷🇴</span>
          <IconArrowDown class="i-ri-arrow-down-s-line w-5 h-5" />
        </span>
      </DropdownButton>
    </template>

    <DropdownItem v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{lang}}</DropdownItem>
    <!-- <DropdownItem divider></DropdownItem>
    <DropdownItem>Logout</DropdownItem> -->
  </Dropdown>
</template>
