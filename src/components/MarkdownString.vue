<script lang="ts" setup name="MarkdownString">
import marked from '@/store/marked';

interface Props {
  source: string;
  wrapTag?: string;
}

const { source, wrapTag = 'div' } = defineProps<Props>();
</script>

<template>
  <component :is="wrapTag">
    <p v-html="marked(source)"></p>
  </component>
</template>

<style lang="less" scoped></style>
