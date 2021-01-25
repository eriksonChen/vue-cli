<template>
  <div class="form-group" v-bind:class="{'d-flex align-items-center': horizontal}">
    <label v-if="label" v-bind:class="labelClass">{{label}}</label>
    <div class="input-group" v-bind:class="inputClass">
      <span v-if="$slots.iconLeft" class="input-group-addon">
        <slot name="iconLeft"></slot>
      </span>
      <input class="form-control timepicker"
        v-bind="$attrs"
        v-on:input="$emit('input', $event.target.value)"
        v-bind:value="value"
      >
      <span v-if="$slots.iconRight" class="input-group-addon">
        <slot name="iconRight"></slot>
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
    iconRight:Boolean,
    iconLeft:Boolean,
    value:String,
    option:Object,
    horizontal:Boolean
  },
  data(){
    return {
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
  mounted() {
    this.value = this.value==="" ? '0:00' :this.value;
    const obj = {...this.opt, ...this.option};
    const picker = $(this.$el).find('.timepicker');
    picker.timepicker(obj).on('changeTime.timepicker', e => {
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
    width: 85px;
    margin-bottom: 0;
  }
  .col{
    padding-left: 0;
    padding-right: 0;
    flex: 1;
  }
</style>