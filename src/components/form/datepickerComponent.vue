<template>
  <div
    class="form-group"
    v-bind:class="{ 'd-flex align-items-center': horizontal }"
  >
    <label v-if="label" :class="[labelClass, {'required': $attrs.required !== undefined}]">{{ label }}</label>
    <div class="input-group" v-bind:class="inputClass">
      <span v-if="$slots.iconLeft" class="input-group-addon">
        <slot name="iconLeft"></slot>
      </span>
      <input
        ref="datepicker"
        class="form-control"
        v-bind="$attrs"
        v-on:input="$emit('input', $event.target.value)"
        v-bind:value="value"
      />
      <span v-if="$slots.iconRight" class="input-group-addon">
        <slot name="iconRight"></slot>
      </span>
      <span v-if="$slots.iconBtn" class="input-group-btn">
        <slot name="iconBtn"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "DatepickerComponent",
  props: {
    label: String,
    value: String,
    horizontal: Boolean,
    format:String,
  },
  data() {
    return {
      picker: null,
    };
  },
  computed: {
    labelClass: function () {
      return this.horizontal ? "label-width control-label" : "";
    },
    inputClass: function () {
      return this.horizontal ? "col" : "";
    },
  },
  watch: {
    value: function (val) {
      this.picker.datepicker("update", val);
    },
  },
  mounted() {
    this.picker = $(this.$refs.datepicker);

    setTimeout(() => {
      this.picker
      .datepicker({
        format: this.format || 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true,
        weekStart: 1,
      })
      .on("changeDate", (e) => {
        this.$emit("input", e.target.value);
      });
    }, 1000);
    
  },
};
</script>

<style scoped lang="scss">
label {
  color: $muted;
}
.label-width {
  width: 100px;
  margin-bottom: 0;
}
.col {
  padding-left: 0;
  padding-right: 0;
  flex: 1;
}
</style>
