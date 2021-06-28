<template>
  <div id="login">
    <div class="wrapper-page">
      <div class="card">
        <div class="card-body">
          <h3 class="text-center">
            <div class="logo">
              <img src="/assets/images/logo-text.png" alt="logo-img" />
              <h3 class="text-muted">帳號登入</h3>
              <!-- <h4 class="text-danger" v-if="isEmp">請輸入id</h4> -->
            </div>
          </h3>


          <form
            class="mt-5 row"
            v-on:submit.prevent="sendBtn($event)"
            method="post"
          >
            <div class="col-12">
              <p class="text-muted" v-if="isDev">測試帳密：{{user.id}} / {{user.password}}</p>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input
                  class="form-control"
                  :class="{ 'is-invalid': errorId }"
                  type="text"
                  required
                  v-model.trim="id"
                  placeholder="請輸入帳號"
                  aria-describedby="validationUserId"
                />
                <div id="validationUserId" class="invalid-feedback">
                  無此帳號
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group">
                <input
                  class="form-control"
                  :class="{ 'is-invalid': errorPassword }"
                  type="password"
                  required
                  v-model.trim="password"
                  aria-describedby="validationUserPassword"
                />
                <div id="validationUserPassword" class="invalid-feedback">
                  密碼錯誤
                </div>
              </div>
            </div>

            <!-- <div class="col-12">
              <sp-checkbox id="checkbox-signup" class="checkbox-primary" label="Remember me" v-model="rememberMe"></sp-checkbox>
            </div> -->

            <div class="col-12">
              <div class="form-group text-center mt-4">
                <button
                  class="btn btn-primary btn-block btn-lg waves-effect waves-light"
                  type="submit"
                > Log In </button>
              </div>
            </div>

            <div class="col-12 text-center">
              <div class="form-group">
                <a href="javascript:;" class="text-muted">
                  <i class="fa fa-lock mr-2"></i> 忘記密碼?
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
import dayjs from "dayjs";
import { mapActions, mapState } from "vuex";
import isEmpty from "lodash/isEmpty";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      isDev: process.env.NODE_ENV === "development" ? true : false,
      id: "",
      password: "",
      errorPassword: false,
      errorId: false,
      rememberMe:false,
      user: {
        id: "erikson",
        password: "admin",
      },
    };
  },
  computed: {
    // ...mapState(["cookieTime"]),
    isEmp:function(){
      return isEmpty(this.id);
    }
  },
  watch: {},
  mounted() {
    $cookies.remove("user_token");
  },
  methods: {
    ...mapActions(["setToken"]),
    sendBtn: function (e) {
      this.errorId = this.user.id !== this.id;

      if (this.errorId) {
        return;
      } else {
        this.errorPassword = this.user.password !== this.password;
        if (this.errorPassword) return;
      }
      const token = dayjs().unix();
      this.setToken(token);

      this.$router.push("/");
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
