<script setup lang="ts" name="Plate">
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <div class="plate">
    <div class="py-2 border-b-slate-700 border-b-2 text-slate-800 border-solid w-full mb-4">
      <span class="font-semibold text-xl">{{ title }}</span>
    </div>

    <div class="text-base text-gray-500">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
