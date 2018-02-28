<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--首页里面永远固定的东西，就写在这。-->
    <router-link to="/index">首页</router-link>
    <router-link to="/course">课程</router-link>
    <router-link to="/micro">luffyX学位</router-link>
    <router-link to="/news">深科技</router-link>
    <!--<router-link to="/login">登录</router-link>-->
    <div>
          <div v-if="this.$store.state.username">
          <a>{{ this.$store.state.username }}</a>
          <a @click="logout">注销</a>
          </div>
          <router-link v-else to="/login">登录</router-link>
    </div>

    <router-view/>
    <!--你的路由切换，就是你的router-view在切换。-->
    <h2>尾部</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    logout(){
      this.$store.state.username = '';
      this.$store.state.token = ''
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
