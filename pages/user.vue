<template>
  <div>
    /user
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
    <div class="btn">
      <nuxt-link 
        to="/home/main" 
        tag="div"> / </nuxt-link>
    </div>
    {{ initial }}
    <nuxt-child/>
  </div>
</template>
<script>
export default {
  name: 'User',
  layout: 'myLayout',
  data() {
    return {
      initial: 'initial'
    }
  }
}
</script>
