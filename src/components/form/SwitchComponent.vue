<template>
  <div style="width:120px; margin:0 auto; padding-left:10px" class="text-left">
    <input
      class="js-switch"
      type="checkbox"
      v-bind="$attrs"
      v-on:change="toggleSwitch"
      v-bind:checked="checked"
      v-bind:id="setSwitchId"
    >
    <span class="m-l-10">{{checktitle}}</span>
  </div>
</template>

<script>
import { Subject } from 'rxjs';
// import $ from 'jquery'

export default {
  inheritAttrs: false,
  name: 'SwitchComponent',
  model: {
    prop: 'checked',
  },
  props: {
    checked:Boolean,
    id:String,
    size:String,
    on:String,
    off:String
  },
  data:function(){
    return {
      subject: new Subject(),
      closeSubject: new Subject(),
      sw:null,
      cbox:null,
      intervalObs:null,
      isChecked:this.checked,
      onText: this.on || 'ON',
      offText: this.off || 'OFF' ,
      switchStyle :{
        color             : '#00a4fe',
        secondaryColor    : '#ccc',
        jackColor         : '#fff',
        className         : 'switchery',
        disabled          : this.pending,
        disabledOpacity   : 0.5,
        speed             : '0.4s',
        size              : this.size || 'default'
      },
    }
  },
  computed: {
    checktitle:function(){
      return this.isChecked ? this.onText : this.offText;
    },
    setSwitchId:function(){
      return 'sw'+this.id
    }
  },
  mounted:function(){
    this.cbox = document.querySelector('#sw'+this.id);
    this.sw = new Switchery(this.cbox, this.switchStyle);
    
    // $(this.$el).find('small').html('<i class="fas fa-spinner"></i>');
  },
  methods: {
    toggleSwitch:function(e){
      this.$emit('input', e.target.checked);
      this.isChecked = e.target.checked;
    },
  },
  beforeDestroy: function() {
    this.subject.next();
    this.subject.complete();
    // this.sw.destroy();
  }
}
 
</script>

<style lang="scss" scope>
  // .switchery{
  //   margin-left: 10px;
  // }
</style>

