<script setup lang="ts">
const props =defineProps(["palette"])
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const copyColor = (color: string) => {
    copyThis.value = color;
    copy(copyThis.value);
};
</script>

<template>
    <!--<div v-for="(palette, idx) in colors" :key="idx"-->
    <div class="mt-15 w-full h-30 flex flex rounded-xl overflow-hidden">
        <div v-for="color in props.palette" :key="color"
            class="flex flex-auto transition-all duration-300 ease-out hover:px-8 hover:cursor-pointer active:px-12"
            :style="{ background: color }" @click="copyColor(color)">
        </div>
    </div>
</template>

