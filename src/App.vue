<script setup lang="ts" name="App">
import MarkdownString from '@/components/MarkdownString.vue';
import Plate from '@/components/Plate.vue';
import Resume from '@/components/Resume.vue';
import Subplate from '@/components/Subplate.vue';
import { Flashlamp, Preschool, TagOne, Workbench } from '@icon-park/vue-next';
</script>

<template>
  <div class="bg-gray-800 h-4 transition-all"></div>

  <div style="padding: 8vw 10vw" class="overflow-hidden">
    <div class="flex flex-col gap-y-6 justify-between">
      <Resume
        center
        name="李尔康"
        phone="`17673949449`"
        email="`li0623for@gmail.com`"
        age="20岁"
        gender="男"
        location="深圳"
        job="`web` 前端开发工程师"
      />

      <Plate title="教育经历" :prefix-icon="Preschool">
        <Subplate
          title="湖南电子科技职业学院"
          sub-title="软件技术 大专 人工智能与软件工程学院"
          date-string="2019.09 - 2022.06"
          location="湖南长沙"
        />

        <template #icon>
          <Preschool theme="filled" :size="24" />
        </template>
      </Plate>

      <Plate title="专业技能">
        <div class="leading-8">
          <MarkdownString
            source="熟练掌握 `HTML`, `CSS`, `JavaScript` 和 `TypeScript` 等前端技术并在实际项目中投入使用。"
          />
          <MarkdownString source="熟悉 `Vue.js`, `React.js` 和 了解 `Angular.js` 等前端框架和常见的设计模式。" />
          <MarkdownString source="熟悉 `Flutter`, `React-Native` 等跨平台应用框架。" />
          <MarkdownString source="熟练使用第三方库例如 `Element-Plus` 和 `Ant Design` 等。" />
          <MarkdownString source="熟悉 `Node` 开发, 熟练使用 `Npm`, `Webpack`, `Rollup` 等工具, 熟悉前端性能的优化。" />
          <MarkdownString source="有良好的代码风格, 注重代码质量。" />
        </div>

        <template #icon>
          <Flashlamp theme="filled" :size="24" />
        </template>
      </Plate>

      <Plate title="工作经历">
        <Subplate
          title="深圳市同行者科技有限公司"
          :sub-title="[
            '参与需求讨论, 指定开发计划, 制定项目和开发规范',
            '参与爱骑行项目双端 `App` 和小程序的开发和方案讨论工作',
            '按照设计图完成内部语料系统的页面和功能开发',
            '独立完成 `@txzing/react-native` 组件库开发',
          ]"
          date-string="2022.02 - 2023.02"
          location="广东深圳"
          link="https://github.com/lirkang/-txzing-react-native"
          link-label="项目地址"
        />

        <template #icon>
          <Workbench theme="filled" :size="24" />
        </template>
      </Plate>

      <Plate title="项目经验">
        <div class="flex flex-col gap-y-2">
          <Subplate
            title="爱骑行"
            sub-title="技术选型: 微信原生小程序 + TypeScript"
            description="参与项目从 0 到 1 开发以及接口联调, 设计了项目内的多个功能类: 使用发布订阅模式来管理蓝牙设备与协议栈之间的数据透传, 使用观察者模式管理页面数据, 实现了简单的依赖注入解决循环依赖问题, 使用适配器模式将安卓和IOS设备上蓝牙连接的不同问题统一处理等。"
          />

          <Subplate
            title="likan(vscode扩展)"
            sub-title="技术选型: Rollup + TypeScript"
            description="从 0 开发整个项目, 实现如下功能: 文件路径查找跳转, 侧边栏显示可定义文件夹的额外资源视图, 批量修改单词格式, 从github服务器下载相应想项目的git忽略文件等。"
            link="https://www.github.com/lirkang/likan"
            link-label="项目地址"
          />
        </div>

        <template #icon>
          <TagOne theme="filled" :size="24" />
        </template>
      </Plate>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
