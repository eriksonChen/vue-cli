<template>
  <div>
    <router-view name="login"></router-view>
    <div
      id="wrapper"
      class="forced"
      :class="{ enlarged: !menuOpen }"
      v-if="islogin"
    >
      <TopBar></TopBar>
      <SideMenu></SideMenu>
      <div class="content-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import TopBar from "@/components/TopBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    SideMenu,
    TopBar,
  },
  data() {
    return {
      // islogin: false,
    };
  },
  computed: {
    ...mapState(["menuOpen", "token"]),
    islogin: function () {
      return this.$route.name !== "Login";
    },
  },
  mounted() {
    // const token = $cookies.get("user_token");
    // if(token){
    // }
    // if (!token) {
    //   this.$route.push({ name: "Login" });
    // }
  },
  methods: {},
  destroyed() {},
};
</script>

