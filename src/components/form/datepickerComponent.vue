<template>
  <div class="form-group" v-bind:class="{'d-flex align-items-center': horizontal}">
    <label v-if="label" v-bind:class="labelClass">{{label}}</label>
    <div class="input-group" v-bind:class="inputClass">
      <span v-if="$slots.iconLeft" class="input-group-addon">
        <slot name="iconLeft"></slot>
      </span>
      <input ref="datepicker" class="form-control"
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

export default {
  inheritAttrs: false,
  name: 'DatepickerComponent',
  props: {
    label:String,
    iconRight:Boolean,
    iconLeft:Boolean,
    value:String,
    horizontal:Boolean
  },
  data(){
    return {
      
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
    const picker = $(this.$refs.datepicker)
    picker.datepicker({
      format: 'yyyy/mm/dd',
      autoclose:true,
      todayHighlight:true,
      weekStart:1,
    }).on('changeDate', e => {
      this.$emit('input', e.target.value);
    });
  },
}
</script>

<style scoped lang="scss">
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
