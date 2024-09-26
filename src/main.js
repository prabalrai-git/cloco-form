import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
// import "ant-design-vue/dist/reset.css";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

const app = createApp(App);

app.use(Antd);
app.use(VueTelInput);
app.mount("#app");
