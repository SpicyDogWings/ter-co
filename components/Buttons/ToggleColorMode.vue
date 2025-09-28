<script lang="ts" setup>
const emits = defineEmits(["click"]);
const colorMode = useColorMode(); 
const toggleColorMode = () => {
  if (colorMode.preference === "system") {
    colorMode.preference = colorMode.value === "light" ? "dark" : "light";
  } else {
    colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
  }
  emits("click");
};
</script>

<template>
  <ButtonsAnchorIcon
    @click="toggleColorMode"
    v-show="colorMode.value === 'light'"
    class="grow w-icon-1 text-gray-600 transition-all duration-150 hover:text-gray-900 hover:cursor-pointer hover:scale-75"
    icon="lucide:sun"
  />
  <ButtonsAnchorIcon
    @click="toggleColorMode"
    v-show="colorMode.value === 'dark'"
    class="grow w-icon-2 text-gray-600 transition-all duration-150 hover:text-gray-900 hover:cursor-pointer hover:scale-75"
    icon="lucide:moon"
  />
</template>
