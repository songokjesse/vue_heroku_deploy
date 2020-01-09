<template>
  <v-app>
    <v-app-bar
      flat
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
       <h3>Keja Hunt</h3>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
<!--        <v-btn text to="/">Home</v-btn>-->
<!--        <v-btn text to="/about">About</v-btn>-->
        <v-btn text to="/signup">Register</v-btn>
        <v-btn text to="/login">Login</v-btn>
      </v-toolbar-items>
    </v-app-bar>
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
    <v-content>
<!--      <HelloWorld/>-->
          <router-view/>
    </v-content>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
