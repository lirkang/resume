<script setup lang="ts" name="Resume">
import LineInfo from './LineInfo.vue';
import SizeSwitcher from './SizeSwitcher.vue';

interface Props {
  name: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  location: string;
  job: string;
}

defineProps<Props>();
</script>

<template>
  <div class="leading-6 flex flex-col gap-y-2">
    <div class="font-semibold text-4xl text-gray-900 flex justify-between">
      <span>{{ name }}</span>
      <SizeSwitcher></SizeSwitcher>
    </div>

    <LineInfo :list-info="[phone, email]"></LineInfo>
    <LineInfo :list-info="[age, gender]"></LineInfo>
    <LineInfo :list-info="[location, job]"></LineInfo>
  </div>
</template>

<style lang="less" scoped></style>
