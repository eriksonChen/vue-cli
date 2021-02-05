<template>
  <div class="left side-menu">
    <div class="sidebar-inner slimscrollleft">
      <div id="sidebar-menu">
        <ul>
          <li class="menu-title">Menu</li>
          <li class="cus_item">
            <router-link to="/" exact class="waves-effect">
              <i class="mdi mdi-view-dashboard"></i> <span> Dashboard </span>
            </router-link>
          </li>
          <li class="cus_item">
            <router-link :to="{name:'Form'}" exact class="waves-effect">
              <i class="fas fa-align-justify"></i> <span> Form </span>
            </router-link>
          </li>
          <li class="cus_item">
            <router-link to="/table" exact class="waves-effect">
              <i class="fas fa-table"></i> <span> Table </span>
            </router-link>
          </li>
          <li class="cus_item">
            <router-link :to="{name:'gmap'}" exact class="waves-effect">
              <i class="fas fa-map"></i> <span> Map </span>
            </router-link>
          </li>
          <li class="cus_item">
            <router-link :to="{name:'Card'}" exact class="waves-effect">
              <i class="fas fa-id-card"></i> <span> Card </span>
            </router-link>
          </li>
          <li class="has_sub cus_item">
            <a href="javascript:;" 
            :class="{ active: isActive('information') }"
            class="waves-effect" 
            @click="menuItemClick($event)">
              <i class="fas fa-folder"></i>
              <span> 資料維護 </span>
              <span class="float-right"><i class="mdi mdi-plus"></i></span>
            </a>
            <ul class="list-unstyled">
              <router-link tag="li" :to="{name: 'info-page1'}" exact class="cus_item">
                <a href="javascript:;">Page 1</a>
              </router-link>
              <router-link tag="li" :to="{name: 'info-page2'}" exact class="cus_item">
                <a href="javascript:;">Page 2</a>
              </router-link>
              <router-link tag="li" :to="{name: 'info-page3'}" exact class="cus_item">
                <a href="javascript:;">Page 3</a>
              </router-link>
            </ul>
          </li>
          <li class="cus_item">
            <router-link to="/login" exact class="waves-effect">
              <i class="fas fa-user"></i> <span> Login </span>
            </router-link>
          </li>

        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'SideMenu',
  data(){
    return {
      title:'', 
    }
  },
  computed:{
    ...mapState(["menuOpen"]),
    isToggle:function(){
      return this.title ? this.title+' chen' : 'none';
    }
  },
  mounted(){

  },
  methods:{
    isActive:function(link){
      return this.$route.path.indexOf(link)>0
    },
    menuItemClick:function(e){
      if(!this.menuOpen) return

      const tar = $(e.currentTarget) //a
      const tarParent = tar.parent() //li.has_sub

      if(tar.hasClass('subdrop')){
        tar.removeClass("subdrop");
        tar.next("ul").slideUp(350);
        $(".float-right i", tarParent).removeClass("mdi-minus").addClass("mdi-plus");
      }else{
        $("ul",tar.parents("ul:first")).slideUp(350);
        $("a",tar.parents("ul:first")).removeClass("subdrop");
        $("#sidebar-menu .float-right i").removeClass("mdi-minus").addClass("mdi-plus");

        tar.next("ul").slideDown(350);
        tar.addClass("subdrop");
        $(".float-right i",tar.parents(".has_sub:last")).removeClass("mdi-plus").addClass("mdi-minus");
        $(".float-right i",tar.siblings("ul")).removeClass("mdi-minus").addClass("mdi-plus");
      }

    }
  },
}
</script>
