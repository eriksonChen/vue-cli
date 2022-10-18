<template>
  <div class="form-group" v-bind:class="{'d-flex align-items-center': horizontal}">
    <label v-if="label" :class="[labelClass, {'required': $attrs.required !== undefined}]">{{label}}</label>
    <div class="input-group" v-bind:class="inputClass">
      <span v-if="$slots.iconLeft" class="input-group-addon">
        <slot name="iconLeft"></slot>
      </span>
      <input ref="timepicker" class="form-control"
        v-bind="$attrs"
        v-on:input="$emit('input', $event.target.value)"
        v-bind:value="value"
      >
      <span v-if="$slots.iconRight" class="input-group-addon">
        <slot name="iconRight"></slot>
      </span>
      <span v-if="$slots.iconBtn" class="input-group-btn">
        <slot name="iconBtn"></slot>
      </span>
    </div>
  </div>
</template>

<script>
import "@/assets/plugins/timepicker/bootstrap-timepicker.js"
export default {
  inheritAttrs: false,
  name: 'TimepickerComponent',
  props: {
    label:String,
    value:String,
    option:Object,
    horizontal:Boolean
  },
  data(){
    return {
      picker:null,
      opt:{
        showMeridian: false,
        minuteStep:5
      },
    }
  },
  computed: {
    labelClass:function(){
      return this.horizontal ? 'label-width control-label' : '';
    },
    inputClass:function(){
      return this.horizontal ? 'col' : '';
    }
  },
  watch:{
    value:function(val){
      this.picker.timepicker('setTime', val);
    }
  },
  mounted() {
    this.value = this.value==="" ? '0:00' :this.value;
    const obj = { ...this.opt, ...this.option };
    this.picker = $(this.$refs.timepicker);
    this.picker.timepicker(obj).on('changeTime.timepicker', e => {
      this.$emit('input', e.time.value);
    });
  },
}
</script>

<style lang="scss" scoped>
  @import "../../assets/plugins/timepicker/bootstrap-timepicker.min.css";
  label{
    color: $muted;
  }
  .label-width{
    width: 100px;
    margin-bottom: 0;
  }
  .col{
    padding-left: 0;
    padding-right: 0;
    flex: 1;
  }
</style>