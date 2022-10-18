<template>
  <div class="form-group" :class="{'d-flex align-items-center': horizontal, 'has-error': error}">
    <label v-if="label" :class="[labelClass, {'required': $attrs.required !== undefined}]" >{{label}}</label>
    <div v-if="isStatic" 
      class="form-control-static font-weight-bold text-white"
      :class="inputClass" 
      v-html="value">
    </div>
    <div v-if="!isStatic" :class="inputClass">
      <div class="input-group">
        <span v-if="$slots.iconLeft" class="input-group-addon">
          <slot name="iconLeft"></slot>
        </span>
        <input class="form-control"
          v-bind="$attrs"
          v-on:input="$emit('input', $event.target.value)"
          :value="value"
        >
        <span v-if="$slots.iconRight" class="input-group-addon">
          <slot name="iconRight"></slot>
        </span>
        <span v-if="$slots.iconBtn" class="input-group-btn">
          <slot name="iconBtn"></slot>
        </span>
      </div>
      <span v-if="note" class="help-block"> {{note}} </span>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'InputComponent',
  props: {
    label:String,
    value:String,
    static:Boolean,
    note:String,
    horizontal: Boolean,
    error: Boolean
  },
  data(){
    return {
      isStatic:this.static
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
  mounted(){}
}
</script>

<style lang="scss" scoped>
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