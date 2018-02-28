<template>
  <div class="index">
    <h1>Login</h1>
    <div>
      <input type="text" v-model="username" placeholder="用户名">
      <input type="text" v-model="password" placeholder="密码">
      <a @click="doLogin">提交</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    doLogin:function(){
      console.log(this.$axios);
      var that = this;
      this.$axios.request({
        url:'http://127.0.0.1:8000/login/',
        method: 'POST',
        data: {
          username: this.username,
          password: this.password
        },
        responseType:'json'
        // 这个 then 就像是ajax 中 success之中的东西
      }).then(function (response) {
        console.log(response)

        // vue 页面都不刷新哦。
        // 登陆后将用户名和 token 放在全局。
//        that.$store.state.username = response.data.username;
//        that.$store.state.token = response.data.token;
        // 因为我们在 store.js 配置过，所以这里可以这样写。
        that.$store.commit('saveToken', response.data);

        // 登陆成功后，如何重定向到 index？？？
        that.$router.push('/index/')
      })
//      console.log(this.username)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--加上scoped 表示只在该组件里面才应用。-->
<style scoped>

</style>
