<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>AppButton</h2>
    <AppButton label='Button' />
    <h2>AppInput</h2>
    <AppInput
      type='text'
      placeholder='Placeholder'
    />
    <h2>AppLink</h2>
    <AppLink label='Index' path="/" />
    <h2>AppLogo</h2>
    <AppLogo
      :label='foo'
    />
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'
import AppInput from '../atoms/AppInput'
import AppLink from '../atoms/AppLink'
import AppLogo from '../atoms/AppLogo'

export default {
  name: 'AtomsPage',
  data () {
    return {
      msg: 'Atoms'
    }
  },
  components: {
    AppButton,
    AppInput,
    AppLink,
    AppLogo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
