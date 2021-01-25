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

