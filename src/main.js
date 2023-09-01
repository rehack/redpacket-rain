import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import { Button, Toast, CountDown, Overlay, Icon} from 'vant';

Vue.use(Button);
Vue.use(Toast);
Vue.use(CountDown);
Vue.use(Overlay);
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
