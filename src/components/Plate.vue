<script setup lang="ts" name="Plate">
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <div class="plate">
    <div class="py-2 border-b-slate-800 border-b-2 border-solid w-full mb-4">
      <span class="text-slate-800 font-semibold text-lg">{{ title }}</span>
    </div>

    <div class="text-sm text-gray-700">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
