import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputSwitch from "primevue/inputswitch";
import StyleClass from "primevue/styleclass";
import MyPreset from "./mypreset";

const app = createApp(App);
app.component("InputSwitch", InputSwitch);
app.directive("styleclass", StyleClass);
app.use(PrimeVue, { unstyled: true, pt: MyPreset });
app.mount("#app");
