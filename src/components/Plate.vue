<script setup lang="ts" name="Plate">
import { Icon } from '@icon-park/vue-next/lib/runtime';

defineProps<{ title: string; PrefixIcon?: Icon }>();
</script>

<template>
  <div class="plate">
    <div class="py-1 border-b-slate-700 border-b-2 text-slate-800 border-solid w-full mb-4 flex items-center gap-x-2">
      <slot name="icon"></slot>
      <span class="font-semibold text-xl">{{ title }}</span>
    </div>

    <div class="text-base text-gray-500">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
