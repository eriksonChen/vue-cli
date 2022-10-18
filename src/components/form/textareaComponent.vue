<template lang="html">

  <div class="form-group" v-bind:class="{'d-flex': horizontal, 'has-error': error}">
    <label v-if="label" :class="[labelClass, {'required': $attrs.required !== undefined}]">{{label}}</label>
    <div v-bind:class="inputClass">
      <textarea class="form-control" 
        v-bind="$attrs" 
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)">
      </textarea>
    </div>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'textarea-component',
    props: {
      label:String,
      value:String,
      horizontal: Boolean,
      error: Boolean,
    },
    data() {
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
  }
</script>

<style scoped lang="scss">
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
