<template>
  <div class="content">
    <div class="page-header-title">
      <h4 class="page-title">{{$route.matched[0].path.replace('/', '')}} page</h4>
    </div>
    <div class="page-content-wrapper container-fluid">
      <router-view />
    </div>
  </div>
</template>
