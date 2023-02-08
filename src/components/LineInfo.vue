<script setup lang="tsx" name="LineInfo">
interface Props {
  listInfo: Array<string | number>;
}

const { listInfo = [] } = defineProps<Props>();

const asd = listInfo.map(info => <span key={info}>{info}</span>);
</script>

<template>
  <div class="text-gray-700 flex items-center">
    <span class="text-base"> {{ listInfo.join(' | ') }} </span>
  </div>
</template>

<style lang="less" scoped></style>
