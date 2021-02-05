<template>
  <div class="content">
    <div class="page-header-title">
      <h4 class="page-title">{{this.title}} page</h4>
    </div>
    <div class="page-content-wrapper container-fluid">
      <router-view></router-view>
      <router-view name="both"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  props: ['title'],
  data() {
    return {
      
    };
  }
};
</script>