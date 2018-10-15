<template>
  <div>
    I am main
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'Main',
  mounted() {
    console.log(moment('2018年8月8日', 'YYYY年MM月DD日').format('YYYY-MM-DD'))
  }
}
</script>
