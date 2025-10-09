<script setup lang="ts">
const colors = defineModel<string[][]>({
    required: true
})
const copyThis = ref("");
const { copy } = useClipboard({ source: copyThis });
const copyColor = (color: string) => {
    copyThis.value = color;
    copy(copyThis.value);
};
</script>

<template>
    <div v-for="(palette, idx) in colors" :key="idx"
        class="mt-15 w-full h-30 flex flex rounded-xl overflow-hidden">
        <div v-for="c in palette" :key="c"
            class="flex flex-auto transition-all duration-300 ease-out hover:px-8 hover:cursor-pointer active:px-12"
            :style="{ background: c }" @click="copyColor(c)">
        </div>
    </div>
</template>

<!-- <script setup lang="ts">
defineEmits<{ copy: [] }>()

// defineModel devuelve un ref
const colors = defineModel<string[][]>({ required: true })

const copyThis = ref('')
const { copy } = useClipboard({ source: copyThis })

function copyColor(color: string) {
  copyThis.value = color   // <-- .value
  copy(color)
  emit('copy')
}
</script>
 -->

<!-- <template>
    <div
      v-for="(palette, idx) in colors"
      :key="idx"
      class="w-full h-50 flex flex-col rounded-xl overflow-hidden"
    >
      <div
        v-for="c in palette"
        :key="c"
        class="flex-auto transition-all duration-300 ease-out hover:py-4 hover:cursor-pointer active:py-8"
        :style="{ background: c }"
        @click="copyColor(c)"
      ></div>
    </div>
</template> -->
