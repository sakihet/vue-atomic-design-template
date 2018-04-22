<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>AppButton</h2>
    <AppButton label='Button' />
    <h2>AppRoundButton</h2>
    <AppRoundButton label='Round Button' />
    <h2>AppInput</h2>
    <AppInput
      type='text'
      placeholder='Placeholder'
    />
    <h2>AppLink</h2>
    <AppLink label='Index' path="/" />
    <h2>CheckBox</h2>
    <AppCheckBox label='Check Box' />
    <h2>AppLogo</h2>
    <AppLogo
      :label='foo'
    />
    <h2>AppTag</h2>
    <AppTag
      label='Tag'
    />
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'
import AppRoundButton from '../atoms/AppRoundButton'
import AppInput from '../atoms/AppInput'
import AppLink from '../atoms/AppLink'
import AppCheckBox from '../atoms/AppCheckBox'
import AppLogo from '../atoms/AppLogo'
import AppTag from '../atoms/AppTag'

export default {
  name: 'AtomsPage',
  data () {
    return {
      msg: 'Atoms'
    }
  },
  components: {
    AppButton,
    AppRoundButton,
    AppInput,
    AppLink,
    AppCheckBox,
    AppLogo,
    AppTag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
