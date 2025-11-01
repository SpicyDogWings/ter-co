<script setup lang="ts">
const colorPalettes = ref([
  ['#F0E491', '#BBC863', '#658C58', '#31694E']
]);
</script>

<template>
  <NuxtLayout name="simple">
    <section class="pt-20 w-full flex flex-col justify-start items-start">
      <h1 class="text-2xl text-mercury-800">Explora nuestras paletas</h1>
      <div class="w-full grid grid-cols-4 gap-10">
        <template v-for="(palette, idx) in colorPalettes" :key="idx">
          <CustomColorBox :palette="palette" />
        </template>
      </div>
    </section>
  </NuxtLayout>
</template>
