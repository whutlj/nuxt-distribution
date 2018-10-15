<template>
  <div>
    /user/age
    <div 
      class="btn" 
      @click="changeName">改变</div>
    {{ ayncDataName }}
    <el-button @click="getSourceType">调用接口</el-button>
    <img 
      src="~assets/img/received.png"
      class="img" 
      alt="">
  </div>
</template>
<script>
import moment from 'moment'
import { getType } from '@/assets/js/api'
export default {
  name: 'Age',
  transition: '',
  middleware: 'router-demo',
  data() {
    return {
      ayncDataName: '帅哥'
    }
  },
  mounted() {
    console.log(moment('2018年8月8日', 'YYYY年MM月DD日').format('YYYY-MM-DD'))
  },
  asyncData(context) {
    // asyncData在组件实例化之前被调用，没有办法通过this获取到组件实例,返回的对象会与data融合
    console.log(context)
    console.log('123')
    // const button = document.createElement('button')
    // button.setAttribute('type', 'button')
    // button.innerHTML = '按钮'
    // document.body.appendChild(button)
    return {
      ayncDataName: '李杰'
    }
  },
  fetch() {
    console.log('fetch')
  },
  head() {
    return {
      title: 'age',
      meta: [
        {
          hid: 'descrition1',
          name: 'descrition',
          content: 'nuxt meta use'
        }
      ]
    }
  },
  methods: {
    changeName() {
      this.ayncDataName = 'setName'
    },
    getSourceType() {
      // this.$axios
      //   .get(`/xdnphb/knowledgepay/v1/api/distribution/getType`)
      //   .then(res => {
      //     console.log(res)
      //   })
      getType().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
.img {
  width: 20px;
  height: 20px;
}
</style>
