import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
// import "@/assets/js/vendor/modernizr.min.js"
import "@/assets/js/vendor/detect.js"
import "@/assets/js/vendor/fastclick.js"
import "@/assets/js/vendor/jquery.slimscroll.js"
import "@/assets/js/vendor/jquery.blockUI.js"
import "@/assets/js/vendor/waves.js"
import "@/assets/js/vendor/jquery.nicescroll.js"
import "@/assets/js/vendor/jquery.scrollTo.min.js"
import '@/assets/plugins/datatables/jquery.dataTables.min.js'
import '@/assets/plugins/datatables/dataTables.bootstrap4.min.js'
import '@/assets/plugins/datatables/dataTables.buttons.min.js'
import '@/assets/plugins/ion.rangeSlider-master/js/ion.rangeSlider.min.js'

// 引入全局 scss
import 'bootstrap/scss/bootstrap.scss'
import '@/assets/scss/icons.scss'
import 'sweetalert2/dist/sweetalert2.min.css'
import "@/assets/plugins/datatables/jquery.dataTables.min.css" 
import "@/assets/plugins/datatables/buttons.bootstrap4.min.css" 
import "@/assets/plugins/datatables/fixedHeader.bootstrap.min.css" 
import "@/assets/plugins/datatables/dataTables.bootstrap4.min.css"
import "@/assets/plugins/datatables/scroller.bootstrap.min.css"
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import '@/assets/plugins/ion.rangeSlider-master/css/ion.rangeSlider.css'
import '@/assets/scss/style_white.scss'

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
