<template>
  <div id="login">
    <div class="wrapper-page">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center m-t-0 m-b-15">
            <div class="logo mb-5">
              <img src="/assets/images/logo-text.png" alt="logo-img" />
              <h3>帳號登入</h3>
            </div>
          </h3>
          <!-- <h4 class="text-muted text-center m-t-0"><b>帳號登入</b></h4> -->

          <form
            class="m-t-20"
            v-on:submit.prevent="sendBtn($event)"
            method="post"
          >
            <div class="col-12">
              <sp-input
                type="text"
                required
                v-model="id"
                placeholder="請輸入帳號"
              >
                <template v-slot:iconRight
                  ><i class="fas fa-user"></i
                ></template>
              </sp-input>
            </div>

            <div class="col-12">
              <sp-input
                type="password"
                required
                v-model="password"
                placeholder="Password"
              >
                <template v-slot:iconRight
                  ><i class="fas fa-lock"></i
                ></template>
              </sp-input>
            </div>

            <!-- <div class="col-12">
              <sp-checkbox id="checkbox-signup" class="checkbox-primary" label="Remember me" v-model="rememberMe"></sp-checkbox>
            </div> -->

            <div class="form-group text-center m-t-40">
              <div class="col-12">
                <button
                  class="btn btn-primary btn-block btn-lg waves-effect waves-light"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </div>

            <div class="form-group row m-t-30 m-b-0">
              <div class="col-sm-12 text-center">
                <a href="javascript:;" class="text-muted">
                  <i class="fa fa-lock m-r-5"></i> 忘記密碼?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/form/inputComponent.vue";
// import SelectComponent from "../components/form/SelectComponent";

export default {
  name: "Login",
  components: {
    // "select-component": SelectComponent,
    "sp-input": InputComponent,
  },
  data() {
    return {
      id: "",
      password: "",
      deviceId: "",
      deviceSelect: [],
    };
  },
  computed: {
    // ...mapState(["cookieTime"]),
  },
  watch: {},
  mounted() {
  },
  methods: {
    sendBtn: function (e) {
      this.$router.push('/');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#login {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: $dark;
}
</style>
