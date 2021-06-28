<template>
  <div class="form-group" v-bind:class="{'d-flex align-items-center': horizontal}">
    <label v-if="label" v-bind:class="labelClass">{{label}}</label>
    <div class="input-group">
      <select ref="selectpicker" class="form-control" 
        v-bind:class="inputClass"
        v-bind:title="$attrs.placeholder"
        v-bind="$attrs"
        v-model="val">
        <option v-if="all" :value="all.value || all">{{all.text || all}}</option>
        <option 
          v-bind:value="item.value || item" 
          v-for="(item, i) in options" :key="i">
          {{item.text || item}}
        </option>
      </select>
      <span v-if="$slots.iconBtn" class="input-group-btn">
        <slot name="iconBtn"></slot>
      </span>
    </div>
  </div>
</template>

<script>
// import '@/assets/js/vendor/bootstrap-select.min.js'

export default {
  inheritAttrs: false,
  name: 'SelectComponent',
  props: {
    label:String,
    options:Array,
    value:String,
    horizontal:Boolean,
    all:Object,
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
    $(this.$refs.selectpicker).selectpicker('refresh');
  },
  mounted(){
    console.log(this.all)
    $(this.$refs.selectpicker).selectpicker();
    this.val = this.value;
  },
}
</script>

<style scoped lang="scss">
  // @import "../../assets/plugins/bootstrap-select/bootstrap-select.min.css";
  label{
    color: $muted;
  }
  .label-width{
    width: 100px;
    margin-bottom: 0;
  }
  .input-group{
    flex: 1;
  }
</style>
