<template>
  <div id="wrapper" class="forced" :class="{ enlarged: !menuOpen }">
    <TopBar></TopBar>
    <SideMenu></SideMenu>
    <div class="content-page">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue"
import TopBar from "@/components/TopBar.vue"
import { mapActions, mapState } from "vuex"

export default {
  components: {
    SideMenu,
    TopBar,
  },
  data() {
    return {
      islogin: false,
    };
  },
  computed: {
    ...mapState(["menuOpen"]),
  },
  mounted() {
  },
  methods: {
   
  },
  destroyed() {
    
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
