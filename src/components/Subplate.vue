<script setup lang="ts" name="Subplate">
import MarkdownString from '@/components/MarkdownString.vue';
import { Link, Local, Time } from '@icon-park/vue-next';

interface Props {
  title?: string;
  subTitle?: string | Array<string>;
  dateString?: string;
  location?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex gap-y-2 flex-col leading-6">
    <div class="flex justify-between">
      <span class="font-semibold text-gray-700" v-if="title">
        <span>{{ title }} </span>
      </span>

      <div v-if="location" class="flex items-center gap-x-2">
        <Local />
        <span> {{ location }} </span>
      </div>
    </div>

    <div class="flex justify-between items-start" v-if="subTitle || dateString">
      <span class="text-gray-600 leading-8" v-if="subTitle">
        <template v-if="Array.isArray(subTitle)">
          <MarkdownString v-for="title of subTitle" :key="title" :source="title" />
        </template>

        <span v-else>{{ subTitle }}</span>
      </span>

      <div v-if="dateString" class="flex items-center gap-x-2">
        <Time />
        <MarkdownString :source="`\`${dateString}\``" />
      </div>
    </div>

    <div v-if="description" class="w-5/6 leading-8 text-justify">
      <span>{{ description }}</span>
    </div>

    <span v-if="link" class="text-base font-normal italic">
      <a :href="link" target="_blank" class="text-blue-600 flex items-center">
        <Link />
        <span>{{ linkLabel }} </span>
      </a>
    </span>
  </div>
</template>

<style lang="less" scoped></style>
