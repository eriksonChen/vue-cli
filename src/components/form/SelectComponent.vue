<template>
  <div class="form-group" v-bind:class="{'d-flex align-items-center': horizontal}">
    <label v-if="label" v-bind:class="labelClass">{{label}}</label>
    <select class="form-control selectpicker" 
      v-bind:class="inputClass"
      v-bind:title="$attrs.placeholder"
      v-bind="$attrs"
      v-model="val" 
      :erer="val">
      <option 
        v-bind:value="item.value ? item.value : item" 
        v-for="(item, i) in options" :key="i">
        {{item.text ?  item.text : item}}
      </option>
    </select>
  </div>
</template>

<script>
import '@/assets/js/vendor/bootstrap-select.min.js'

export default {
  inheritAttrs: false,
  name: 'SelectComponent',
  props: {
    label:String,
    options:Array,
    value:String,
    horizontal:Boolean
  },
  data(){
    return {
      val: ""
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
  watch: {
    value:function(){
      this.val = this.value;
      if(this.$attrs.multiple===''){
        this.$emit('update:value', this.val);
      }
      this.$emit('change', this.val);
    },
    val:function(){
      this.$emit('input', this.val);
    }
  },
  updated: function() {
    $(this.$el).find('select.selectpicker').selectpicker('refresh');
  },
  mounted(){
    const el = $(this.$el).find('select.selectpicker');
    el.selectpicker();
    this.val = this.value;
        
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/plugins/bootstrap-select/bootstrap-select.min.css";
  label{
    color: $muted;
  }
  .label-width{
    width: 85px;
    margin-bottom: 0;
  }
</style>
