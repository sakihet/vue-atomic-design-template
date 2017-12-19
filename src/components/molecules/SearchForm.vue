<template>
  <div class="search-form">
    <AppInput :type="inputType" :placeholder="inputPlaceholder" />
    <AppButton label="Search" />
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'
import AppInput from '../atoms/AppInput'

export default {
  name: 'SearchForm',
  data () {
    return {
      inputType: 'type',
      inputPlaceholder: 'Enter the keyword'
    }
  },
  components: {
    AppButton,
    AppInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
