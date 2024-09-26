<script setup>
import {
  CalendarOutlined,
  CheckCircleOutlined,
  CloudUploadOutlined,
  InfoCircleOutlined,
  ProfileOutlined,
  UserAddOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { message } from "ant-design-vue";

const fileList = ref([]);
const handleChange = (info) => {
  const status = info.file.status;
  if (status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (status === "done") {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
function handleDrop(e) {
  console.log(e);
}

const options = ref([
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "rejected",
    label: "Rejected",
  },
]);
const optionsTask = ref([
  {
    value: "task1",
    label: "Task 1",
  },
  {
    value: "task2",
    label: "Task 2",
  },
  {
    value: "task3",
    label: "Task 3",
  },
]);
const handleChangeStatus = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const value = ref(2);
const checked = ref(false);
const textareavalue = ref("");

const ratingValue = ref(3);
const desc = ref(["terrible", "bad", "normal", "good", "wonderful"]);
</script>

<template>
  <a-form layout="vertical">
    <section class="my-8">
      <div class="flex gap-4 font-medium my-4">
        <InfoCircleOutlined />
        <p class="self-start">General Info</p>
      </div>
      <a-card :bordered="true" class="shadow-sm">
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="Full Name" class="flex-1">
            <a-input value="" placeholder="Enter you full name" />
          </a-form-item>
          <a-form-item label="Email" class="flex-1">
            <a-input value="" placeholder="Enter you email" />
          </a-form-item>
        </div>
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="Phone Number" class="flex-1">
            <vue-tel-input v-model="phone"></vue-tel-input>
          </a-form-item>
          <a-form-item label="Years of Experience" class="flex-1">
            <a-input-number
              addon-after="Years"
              class="w-[100%]"
            ></a-input-number>
          </a-form-item>
        </div>
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="Applicant CV" class="flex-1">
            <a-upload-dragger
              v-model:fileList="fileList"
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
              @drop="handleDrop"
            >
              <p class="ant-upload-drag-icon">
                <CloudUploadOutlined class="text-appBlue" />
              </p>
              <p class="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p class="ant-upload-hint px-10">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </a-upload-dragger>
          </a-form-item>
          <a-form-item label="Applicant Image" class="flex-1">
            <a-upload-dragger
              v-model:fileList="fileList"
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
              @drop="handleDrop"
            >
              <p class="ant-upload-drag-icon">
                <UserAddOutlined class="text-appBlue" />
              </p>
              <p class="ant-upload-text">
                Click or drag image to this area to upload
              </p>
              <p class="ant-upload-hint px-10">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </a-upload-dragger>
          </a-form-item>
        </div>
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="Status" class="flex-1">
            <a-select
              class="w-[100%]"
              v-model:value="valueStatus"
              show-search
              placeholder="Select a status"
              :options="options"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChangeStatus"
              :allowClear="true"
            ></a-select>
          </a-form-item>
          <a-form-item label="Rating" class="flex-1">
            <a-rate v-model:value="ratingValue" :tooltips="desc" />
            <span class="ant-rate-text capitalize">{{
              desc[ratingValue - 1]
            }}</span>
          </a-form-item>
        </div>
      </a-card>
    </section>
    <section class="my-8">
      <div class="flex gap-4 font-medium my-4">
        <ProfileOutlined />
        <p class="self-start">Applicant CV Information</p>
      </div>
      <a-card :bordered="true" class="shadow-sm">
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="CV Added Date" class="flex-1">
            <a-date-picker v-model:value="value1" class="w-[100%]" />
          </a-form-item>
          <a-form-item label="Author" class="flex-1">
            <a-input value="" placeholder="Enter Author Name" />
          </a-form-item>
        </div>
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="Is CV Screened" class="flex-1">
            <a-switch v-model:checked="checked" />
          </a-form-item>
          <a-form-item label="Source" class="flex-1">
            <a-input value="" placeholder="Enter Source" />
          </a-form-item>
        </div>
        <div class="flex gap-5">
          <a-form-item label="CV Screen Comment" class="flex-1">
            <a-textarea
              v-model:value="textareavalue"
              placeholder="Basic usage"
              :rows="4"
            />
          </a-form-item>
        </div>
      </a-card>
    </section>
    <section class="my-8">
      <div class="flex gap-4 font-medium my-4">
        <CheckCircleOutlined />
        <p class="self-start">Interview Status</p>
      </div>
      <a-card :bordered="true" class="shadow-sm">
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="First Inteview Date" class="flex-1">
            <a-date-picker v-model:value="value1" class="w-[100%]" />
          </a-form-item>
          <a-form-item label="Second Interview Date" class="flex-1">
            <a-date-picker v-model:value="value1" class="w-[100%]" />
          </a-form-item>
        </div>
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="Task" class="flex-1">
            <a-select
              class="w-[100%]"
              v-model:value="valueStatus"
              show-search
              placeholder="Select a status"
              :options="optionsTask"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChangeStatus"
              :allowClear="true"
            ></a-select>
          </a-form-item>
          <a-form-item label="Task Deadline" class="flex-1">
            <a-date-picker v-model:value="value1" class="w-[100%]" />
          </a-form-item>
        </div>
        <div class="flex gap-5">
          <a-form-item label="First Interview Comment" class="flex-1">
            <a-textarea
              v-model:value="textareavalue"
              placeholder="Basic usage"
              :rows="4"
            />
          </a-form-item>
        </div>
        <div class="flex gap-5">
          <a-form-item label="Second Interview Comment" class="flex-1">
            <a-textarea
              v-model:value="textareavalue"
              placeholder="Basic usage"
              :rows="4"
            />
          </a-form-item>
        </div>
      </a-card>
    </section>
    <section class="my-8">
      <div class="flex gap-4 font-medium my-4">
        <CalendarOutlined />
        <p class="self-start">Date Information</p>
      </div>
      <a-card :bordered="true" class="shadow-sm">
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="Possible Join Date" class="flex-1">
            <a-date-picker v-model:value="value1" class="w-[100%]" />
          </a-form-item>
          <a-form-item label="Hire Date" class="flex-1">
            <a-date-picker v-model:value="value1" class="w-[100%]" />
          </a-form-item>
        </div>
        <div class="flex gap-3 flex-col md:flex-row">
          <a-form-item label="Actual Join Date" class="flex-1">
            <a-date-picker v-model:value="value1" class="w-[100%]" />
          </a-form-item>
          <a-form-item label="Rejected Date" class="flex-1">
            <a-date-picker v-model:value="value1" class="w-[100%]" />
          </a-form-item>
        </div>
      </a-card>
    </section>
    <div class="flex justify-between mt-10">
      <button
        class="border-gray-400 border-[0.5px] px-5 py-2 rounded-md shadow-sm text-sm font-semibold text-gray-500 hover:text-gray-700 hover:shadow-md"
      >
        Cancel
      </button>
      <button
        class="px-5 py-2 rounded-md shadow-sm text-sm font-semibold min-w-[100px] text-white hover:shadow-md bg-appBlue hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  </a-form>
</template>
