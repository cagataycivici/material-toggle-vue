<template>
    <div
        class="min-h-screen bg-surface-50 dark:bg-surface-900 p-8 flex items-center justify-center transition-colors duration-200">
        <div class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8">
            <DarkToggle />
            <ColorPalette />
        </div>

        <div
            class="flex flex-wrap justify-between gap-8 bg-surface-0 dark:bg-surface-800 rounded-xl p-8 border surface-border-200 dark:border-surface-700">
            <div class="flex items-center gap-3">
                <InputSwitch inputId="primary" v-model="val1" />
                <label for="primary" class="text-surface-700 dark:text-surface-300">Primary</label>
            </div>
            <div class="flex items-center gap-3">
                <InputSwitch inputId="accent" v-model="val2" type="accent" />
                <label for="accent" class="text-surface-700 dark:text-surface-300">Accent</label>
            </div>
            <div class="flex items-center gap-3">
                <InputSwitch inputId="disabled" v-model="val3" disabled />
                <label for="disabled" class="text-surface-700 dark:text-surface-300">Disabled</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DarkToggle from './components/DarkToggle.vue';
import ColorPalette from './components/ColorPalette.vue';

const val1 = ref(true);
const val2 = ref(true);
const val3 = ref(false);
</script>