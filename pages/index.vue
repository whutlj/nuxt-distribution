<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-distribution
      </h1>
      <h2 
        class="subtitle" 
        @click = "random">
        nuxt分销手机端
      </h2>
      <div class="links">
        <div class="btn">
          <nuxt-link 
            to="/home/main" 
            tag="div"> 按钮 </nuxt-link>
        </div>
        <div class="btn">
          <nuxt-link 
            to="/user/age" 
            tag="div"> /user/age </nuxt-link>
        </div>
        <div class="btn">
          <nuxt-link 
            to="/user/name" 
            tag="div"> /user/name </nuxt-link>
        </div>
      </div>
      <div v-show="myImage">
        <img 
          :src="myImage" 
          alt="">
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {
  data,
  repeat,
  booleanTest,
  objProp,
  randomImage
} from '~/assets/js/mock'
export default {
  components: {
    Logo
  },
  data() {
    return {
      myImage: ''
    }
  },
  asyncData(context) {
    console.log(context)
  },
  methods: {
    random() {
      // console.log(repeat('string'))
      // console.log(repeat('number'))
      // console.log(booleanTest(true))
      // console.log(objProp({ name: 'lj', age: 20, des: 'cd' }, 1, 3))
      this.myImage = randomImage()
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
