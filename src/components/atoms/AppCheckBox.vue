<template>
  <label>
    <input type="checkbox" name="checkbox[]" class="checkbox-input">
    <span class="checkbox-parts">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'AppCheckBox',
  data () {
    return {}
  },
  props: {
    label: String
  }
}
</script>

<style scoped>
.checkbox-input{
  display: none;
  margin-bottom: 3px;
}
.checkbox-parts{
  padding-left: 25px;
  position:relative;
  margin-right: 10px;
}
.checkbox-parts::before{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border: 1px solid #999;
  border-radius: 4px;
}
.checkbox-input:checked + .checkbox-parts{
  color: #009a9a;
}
.checkbox-input:checked + .checkbox-parts::after{
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  left: 5px;
  width: 4px;
  height: 11px;
  transform: rotate(40deg);
  border-bottom: 3px solid #009a9a;
  border-right: 3px solid #009a9a;
}
</style>
