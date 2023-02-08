<script setup lang="ts" name="Subplate">
import MarkdownString from '@/components/MarkdownString.vue';

interface Props {
  title?: string;
  subTitle?: string | Array<string>;
  dateString?: string;
  location?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
}

const { title, dateString, description, location, subTitle, link, linkLabel = '链接' } = defineProps<Props>();
</script>

<template>
  <div class="flex gap-y-2 flex-col leading-6">
    <div class="flex justify-between">
      <span class="font-semibold text-gray-700" v-if="title">
        <span>{{ title }} </span>
      </span>

      <span v-if="location"> {{ location }} </span>
    </div>

    <div class="flex justify-between" v-if="subTitle || dateString">
      <span class="text-gray-600 leading-8" v-if="subTitle">
        <template v-if="Array.isArray(subTitle)">
          <MarkdownString v-for="title of subTitle" :key="title" :source="title" />
        </template>

        <span v-else>{{ subTitle }}</span>
      </span>

      <MarkdownString v-if="dateString" :source="`\`${dateString}\``" />
    </div>

    <div v-if="description" class="w-4/6 leading-8 text-justify">
      <span>{{ description }}</span>
    </div>

    <span v-if="link" class="text-base font-normal italic">
      <a :href="link" target="_blank" class="text-blue-600 hover:underline">{{ linkLabel }}</a>
    </span>
  </div>
</template>

<style lang="less" scoped></style>
