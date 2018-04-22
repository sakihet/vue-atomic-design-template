<template>
  <button class="app-button">{{ label }}</button>
</template>

<script>
export default {
  name: 'AppRoundButton',
  data () {
    return {}
  },
  props: {
    label: String
  }
}
</script>

<style scoped>
.app-button {
  -webkit-appearance:none;
  color: #ffffff;
  background-color: #4fc08d;
  font-weight:bold;
  text-decoration:none;
  text-align:center;
  padding:6px 10px 6px 10px;
  border-radius:20px;
  border-color: #4fc08d; 
}
</style>
