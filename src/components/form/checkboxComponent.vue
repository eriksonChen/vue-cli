<template>
  <div class="checkbox form-group">
    <input
      type="checkbox"
      v-bind="$attrs"
      v-model="val"
      v-bind:id="id"
    >
    <label v-bind:for="id" v-if="label"> {{label}}</label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'CheckboxComponent',
  props: {
    label:String,
    value: Boolean,
    id:String,
  },
  data(){
    return {
      val:this.value
    }
  },
  watch: {
    val:function(val){
      this.$emit('input', val);
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
