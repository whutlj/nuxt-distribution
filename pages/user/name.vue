<template>
  <div>
    /user/name
    <el-button>饿了么按钮</el-button>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'Name',
  transition: '',
  middleware: 'router-demo',
  asyncData(context) {
    console.log(context)
  },
  mounted() {
    console.log(moment('2018年8月8日', 'YYYY年MM月DD日').format('YYYY-MM-DD'))
  }
}
</script>
