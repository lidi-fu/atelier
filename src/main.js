import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

//Vue.config.productionTip = false;
const app = createApp(App);

app.use(router);
app.mount('#app');
//createApp(App).mount('#app')