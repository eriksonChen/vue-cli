<template lang="html">

  <div class="form-group" v-bind:class="{row: horizontal}">
    <label v-if="label" v-bind:class="labelClass">{{label}}</label>
    <div v-bind:class="inputClass">
      <input type="text" class="js-range-slider"
        ref="slider"
        v-bind="$attrs"
        v-bind:value="value"/>
    </div>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'rangeslider-component',
    props: {
      value:String,
      label:String,
      min:Number,
      max:Number,
      postfix:String,
      prefix:String,
      double:Boolean,
      horizontal:Boolean
    },
    data() {
      return {
        rangeslider:null,
      }
    },
    computed: {
      labelClass:function(){
        return this.horizontal ? 'col-md-3 col-sm-4 col-form-label' : '';
      },
      inputClass:function(){
        return this.horizontal ? 'col-md-9 col-sm-8' : '';
      }
    },
    mounted() {

      $(this.$refs.slider).ionRangeSlider({
        skin: "round",
        type: this.double || "single",
        min: this.min || 0,
        max: this.max || 100,
        hide_min_max:true,
        prefix: this.prefix,
        postfix:this.postfix,
        input_values_separator:',',
        onChange: ()=> {
          this.$emit('input', $(this.$refs.slider).val());
        }
      });
      this.rangeslider = $(this.$refs.slider).data('ionRangeSlider');

    },
    methods: {

    },
    beforeDestroy() {
      this.rangeslider.destroy();
    }
}
</script>

<style lang="scss" scoped>
  ::v-deep .irs--round{
    pointer-events: none;
    .irs-line{
      pointer-events: auto;
    }
    .irs-handle{
      border: 1px solid $lightgray;
      pointer-events: auto;
    }
    .irs-from, .irs-to, .irs-single{
      border-radius: 10px;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  
</style>
