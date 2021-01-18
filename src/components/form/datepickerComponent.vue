<template>
  <div class="form-group">
    <label v-if="label">{{label}}</label>
    <div class="input-group">
      <span v-if="$slots.iconLeft" class="input-group-addon">
        <slot name="iconLeft"></slot>
      </span>
      <input class="form-control date-picker"
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
import dayjs from 'dayjs'
import $ from 'jquery'
export default {
  inheritAttrs: false,
  name: 'DatepickerComponent',
  props: {
    label:String,
    iconRight:Boolean,
    iconLeft:Boolean,
    value:String,
  },
  data(){
    return {
      
    }
  },
  mounted() {
    // console.log(dayjs().format('YYYY/MM/DD'))
    const picker = $(this.$el).find('.date-picker');
    picker.datepicker({
      format: 'yyyy/mm/dd',
      autoclose:true,
      // todayHighlight:true,
    }).on('changeDate', e => {
      this.$emit('input', e.target.value);
    });
  },
}
</script>
