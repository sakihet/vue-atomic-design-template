<template>
  <button
    :class="shape"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  data () {
    return {}
  },
  props: {
    label: String,
    shape: {
      type: String,
      default: 'square'
    }
  }
}
</script>

<style scoped>
.square {
  color: #4fc08d;
  border-color: #4fc08d;
  padding: 0.5em;
  box-shadow: 0.5px 0.5px;
}
.square:hover {
  color: #ffffff;
  background-color: #4fc08d;
}
.round {
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
