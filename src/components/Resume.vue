<script setup lang="ts" name="Resume">
import LineInfo from './LineInfo.vue';

interface Props {
  name: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  location: string;
  job: string;
  center?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="leading-6 flex flex-col gap-y-2">
    <div :class="['font-semibold text-4xl text-gray-900 flex', { 'justify-center': center }]">
      <span>{{ name }}</span>
    </div>

    <LineInfo :center="center ?? false" :list-info="[phone, email]"></LineInfo>
    <LineInfo :center="center ?? false" :list-info="[age, gender]"></LineInfo>
    <LineInfo :center="center ?? false" :list-info="[location, job]"></LineInfo>
  </div>
</template>

<style lang="less" scoped></style>
