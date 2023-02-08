<script setup lang="tsx" name="LineInfo">
import MarkdownString from '@/components/MarkdownString.vue';

interface Props {
  listInfo: Array<string | number>;
}

const { listInfo = [] } = defineProps<Props>();
</script>

<template>
  <div class="text-gray-700 flex items-center">
    <span class="text-base">
      <MarkdownString :source="listInfo.join('&nbsp;|&nbsp;')" />
    </span>
  </div>
</template>

<style lang="less" scoped></style>
