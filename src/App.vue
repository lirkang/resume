<script setup lang="ts" name="App">
import Plate from './components/Plate.vue';
import Resume from './components/Resume.vue';
import Subplate from './components/Subplate.vue';
</script>

<template>
  <div class="bg-gray-800 absolute top-0 left-0 right-0 h-4"></div>

  <div class="flex flex-col gap-y-4">
    <Resume
      name="李尔康"
      phone="17673949449"
      email="li0623for@gmail.com"
      age="20岁"
      gender="男"
      location="深圳"
      job="web前端开发工程师"
    />

    <Plate title="教育经历">
      <Subplate
        title="湖南电子科技职业学院"
        sub-title="软件技术 大专 人工智能与软件工程学院"
        date-string="2019.09 - 2022.06"
        location="湖南长沙"
      />
    </Plate>

    <Plate title="专业技能">
      <div class="leading-8">
        <p>熟练掌握HTML、CSS和JavaScript、TypeScript等前端技术。</p>
        <p>熟悉Vue.js、React 、Angular等前端框架和常见的设计模式。</p>
        <p>了解Node.js和HTTP协议。</p>
        <p>了解Webpack自动化构建工具。</p>
      </div>
    </Plate>

    <Plate title="工作经历">
      <Subplate
        title="深圳市同行者科技有限公司"
        sub-title="web前端开发工程师"
        date-string="2022.03 - 2023.01"
        description="参与万象智联app，爱骑行app，爱骑行小程序开发工作，维护内部管理系统。"
        location="深圳"
      />
    </Plate>

    <Plate title="项目经验">
      <div class="flex flex-col gap-y-2">
        <Subplate
          title="爱骑行(小程序)"
          sub-title="前端开发"
          date-string="2022.10 - 2023.01"
          description="负责公司爱骑行项目的小程序端的前后端交互开发，提供数据接口,  使用ws连接协议栈与蓝牙车机设备通信，与UI设计及后台开发人员团队协作，高效优质完成产品界面和功能的实现。"
          location="深圳"
        />

        <Subplate
          title="likan(vscode插件)"
          sub-title="独立完成"
          date-string="2022.05 - 至今"
          description="使用rollup和typescript进行开发和编译，运行在vscode上，实现了修改单词格式，文件定义跳转，独立的资源树视图等功能。项目地址： https://www.github.com/lirkang/likan"
          location="深圳"
        />
      </div>
    </Plate>
  </div>
</template>

<style lang="less" scoped></style>
