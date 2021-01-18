<template>
  <div class="topbar">
    <div class="topbar-left">
      <div class="text-center">
        <router-link to="/" class="logo"
          ><img src="/assets/images/logo-text.png" alt="logo-img"
        /></router-link>
        <router-link to="/" class="logo-sm"
          ><img src="/assets/images/logo.png" alt="logo-img"
        /></router-link>
      </div>
    </div>

    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <ul class="list-inline menu-left mb-0">
          <li class="float-left">
            <button
              class="button-menu-mobile open-left waves-light waves-effect"
              @click="toggleMenu"
            >
              <i class="mdi mdi-menu"></i>
            </button>
          </li>
        </ul>

        <ul class="nav navbar-right float-right list-inline">
          <li class="d-none d-sm-block">
            <a
              href="javascript:;"
              @click="toggleFullscreen"
              class="waves-effect waves-light notification-icon-box"
              ><i class="mdi mdi-fullscreen"></i
            ></a>
          </li>

          <li class="dropdown">
            <a
              href=""
              class="dropdown-toggle profile waves-effect waves-light"
              data-toggle="dropdown"
              aria-expanded="true"
            >
              <img
                src="/assets/images/svg/account.svg"
                alt="user-img"
                class="rounded-circle"
              />
            </a>
            <ul class="dropdown-menu">
              <li>
                <button type="button" class="dropdown-item">Logout</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import store from '../store'
// import $ from 'jquery'

export default {
  name: "TopBar",
  props: {
    msg: String,
  },
  data() {
    return {
      isEnLarged: true,
    }
  },
  computed: {
    ...mapState(["menuOpen"]),
  },
  mounted() {},
  methods: {
    toggleMenu: function () {
      store.dispatch("toggleMenu");

      if ($("#wrapper").hasClass("enlarged")) {
        $(".subdrop").siblings("ul:first").show();
      } else {
        $(".left ul").removeAttr("style");
      }

      // this.toggle_slimscroll(".slimscrollleft");
      $("body").trigger("resize");
    },
    toggle_slimscroll: function (item) {
      if ($("#wrapper").hasClass("enlarged")) {
        $(item).css("overflow", "inherit").parent().css("overflow", "inherit");
        $(item).siblings(".slimScrollBar").css("visibility", "hidden");
      } else {
        $(item).css("overflow", "hidden").parent().css("overflow", "hidden");
        $(item).siblings(".slimScrollBar").css("visibility", "visible");
      }
    },
    launchFullscreen: function (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    },
    exitFullscreen: function (params) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
    toggleFullscreen: function () {
      const fullscreenEnabled =
        document.fullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.webkitFullscreenEnabled;

      if (this.isFullScreen) {
        this.exitFullscreen();
      } else {
        this.launchFullscreen(document.documentElement);
      }
      this.isFullScreen = !this.isFullScreen;
    },
  },
};
</script>
