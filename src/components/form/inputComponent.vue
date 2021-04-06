<template>
  <div class="form-group" v-bind:class="{'d-flex align-items-center': horizontal}">
    <label v-if="label" v-bind:class="labelClass">{{label}}</label>
    <div v-if="stat" 
      class="form-control-static font-weight-bold"
      v-bind:class="inputClass" 
      v-html="value">
    </div>
    <div v-if="!stat" v-bind:class="inputClass">
      <div class="input-group">
        <span v-if="$slots.iconLeft" class="input-group-addon">
          <slot name="iconLeft"></slot>
        </span>
        <input class="form-control"
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
      <span v-if="note" class="help-block"> {{note}} </span>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'InputComponent',
  props: {
    title:String,
    label:String,
    value:String,
    static:Boolean,
    note:String,
    horizontal:Boolean
  },
  data(){
    return {
      stat:this.static
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
}
</script>

<style lang="scss" scoped>
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