<script setup lang="ts" name="Subplate">
interface Props {
  title: string;
  subTitle: string;
  dateString: string;
  location: string;
  description?: string;
}

const { title, dateString, description, location, subTitle } = defineProps<Props>();
</script>

<template>
  <div class="flex gap-y-2 flex-col leading-6">
    <div class="flex justify-between">
      <span class="font-semibold"> {{ title }} </span>
      <span> {{ location }} </span>
    </div>

    <div class="flex justify-between">
      <span>{{ subTitle }}</span>
      <span>{{ dateString }}</span>
    </div>

    <div v-if="description !== undefined">
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
