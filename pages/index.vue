<script setup lang="ts">
const colorPalettes = ref([
  ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'], // Warm palette
  ['#FF33A1', '#A133FF', '#33FFF3', '#F333FF'], // Vibrant palette
  ['#8A2BE2', '#4B0082', '#228B22', '#FF6347'], // Classic palette
  ['#FFD700', '#FF69B4', '#7FFFD4', '#FF4500']  // Bright palette
]);
</script>

<template>
  <NuxtLayout name="simple">
    <section class="pt-20 w-full flex flex-col justify-start items-start">
      <h1 class="text-2xl text-mercury-800">Explora nuestras paletas</h1>
      <div class="w-full grid grid-cols-4 gap-10">
        <PreviewColorBox v-model="colorPalettes" />
      </div>
    </section>
  </NuxtLayout>
</template>
