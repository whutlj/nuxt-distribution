import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'
// import { Button } from 'element-ui'
export default () => {
  Vue.use(Element, { locale })
}
// Vue.use(Button)
