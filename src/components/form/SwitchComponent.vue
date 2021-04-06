<template>
  <div style="width:120px; margin:0 auto; padding-left:10px" class="text-left">
    <input
      class="js-switch"
      type="checkbox"
      ref="switch"
      v-bind="$attrs"
      v-on:change="toggleSwitch"
      v-bind:checked="checked"
    >
    <span class="m-l-10">{{checktitle}}</span>
  </div>
</template>

<script>
import { Subject } from 'rxjs';

export default {
  inheritAttrs: false,
  name: 'SwitchComponent',
  model: {
    prop: 'checked',
  },
  props: {
    checked:Boolean,
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
    }
  },
  mounted:function(){
    this.cbox = this.$refs.switch;
    this.sw = new Switchery(this.cbox, this.switchStyle);
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
    this.sw.destroy();
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/plugins/switchery/switchery.css";
  ::v-deep {
    .switchery>small {
      display: flex;
    }
    .switchery>small>i{
      display: none;
      margin: auto;
      color:gray;
      animation: pending 1s infinite linear;
    }
    .pending .switchery>small>i{
      display: block;
    }
    @-webkit-keyframes pending {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes pending {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
</style>
