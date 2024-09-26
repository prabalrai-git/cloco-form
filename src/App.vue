<script setup>
import AddApplicationForm from "./components/AddApplicationForm.vue";
import { h } from "vue";
import {
  ArrowLeftOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
  MenuOutlined,
  SearchOutlined,
  SecurityScanOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

const placement = ref("right");
const open = ref(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
];
</script>
<template>
  <div class="md:p-8 p-4 bg-offwhite min-h-screen pb-20">
    <div class="flex md:flex-row justify-between mb-6 flex-col gap-5">
      <a-breadcrumb class="self-center">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
      </a-breadcrumb>
      <button>
        <span
          class="py-3 px-5 flex justify-center items-center bg-appBlue hover:bg-blue-700 text-white gap-3 rounded-md"
        >
          <ArrowLeftOutlined /> Back</span
        >
      </button>
    </div>
    <h1 class="text-2xl font-semibold capitalize">Add application</h1>
    <AddApplicationForm />
    <a-float-button-group
      trigger="click"
      type="primary"
      :style="{ right: '30px', bottom: '30px' }"
    >
      <template #icon> <MenuOutlined /> </template>
      <a-float-button>
        <template #icon><SecurityScanOutlined /></template
      ></a-float-button>
      <a-float-button @click="showDrawer" :badge="{ count: 5, color: 'red' }">
        <template #icon>
          <CommentOutlined />
        </template>
      </a-float-button>
    </a-float-button-group>
    <template>
      <a-drawer
        :width="500"
        title="Chats"
        :placement="placement"
        :open="open"
        @close="onClose"
        class="relative"
      >
        <!-- <template #extra>
          <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
          <a-button type="primary" @click="onClose">Submit</a-button>
        </template> -->
        <a-list class="absolute top-20 right-0 left-0" :data-source="data">
          <template #renderItem="{ item }">
            <a-list-item>{{ item }}</a-list-item>
          </template>

          <!-- <template #header>
            <div>Header</div>
          </template>
          <template #footer>
            <div>Footer</div>
          </template> -->
        </a-list>
        <a-input-search
          class="absolute bottom-0 right-0"
          v-model:value="value"
          placeholder="Enter message"
          enter-button="Send"
          size="large"
          @search="onSearch"
        />
      </a-drawer>
    </template>
  </div>
</template>
