<script lang="ts" setup name="MarkdownString">
import { marked } from 'marked';

interface Props {
  source: string;
  wrapTagName?: string;
}

defineProps<Props>();
</script>

<template>
  <component :is="wrapTagName ?? 'div'">
    <p v-html="marked(source)" class="text-justify"></p>
  </component>
</template>

<style lang="less" scoped></style>
