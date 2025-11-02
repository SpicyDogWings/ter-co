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
    <div class="w-full flex flex-col justify-center align-center gap-3">
        <div class="w-full h-30 flex flex rounded-xl overflow-hidden">
            <div v-for="color in props.palette" :key="color"
                class="flex flex-auto transition-all duration-300 ease-out hover:px-8 hover:cursor-pointer active:px-12"
                :style="{ background: color }" @click="copyColor(color)">
            </div>
        </div>
        <div class="w-full flex justify-start align-center gap-3">
            <Button variant="primary">
                <Icon name="lucide:eye" class="h-4 w-4"/>
            </Button>
        </div>
    </div>
</template>

