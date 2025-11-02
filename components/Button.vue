<script setup lang="ts">
enum Variant {
	primary = "primary",
	secondary = "secondary",
	danger = "danger",
}
const props = defineProps<{ variant: string }>();

// Convert the string prop to the enum value
const variantEnum = Variant[props.variant as keyof typeof Variant];
</script>

<template>
  <div class="transition-all duration-150 hover:cursor-pointer active:scale-90">
    <button class="text-md flex justify-center items-center gap-2">
      <slot />
    </button>
  </div>
</template>
