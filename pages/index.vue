<script setup lang="ts">
const config = useRuntimeConfig();
const { getPublicData } = useAppwrite();
const colorPalettes = ref();

onMounted(async () => {
    const data = await getPublicData(
        config.public.appwriteDatabaseId,
        "690aa39d0026e2b0b693",
    );
    const palettes = [];
    for (const row of data) {
        palettes.push(row.colors);
    }
    colorPalettes.value = palettes;
});
</script>

<template>
    <NuxtLayout name="simple">
        <section
            class="pt-20 w-full flex flex-col justify-start items-start gap-5"
        >
            <h1 class="text-2xl text-mercury-800">Explora nuestras paletas</h1>
            <div class="w-full grid grid-cols-4 gap-10">
                <template v-for="(palette, idx) in colorPalettes" :key="idx">
                    <CustomColorBox :palette="palette" />
                </template>
            </div>
        </section>
    </NuxtLayout>
</template>
