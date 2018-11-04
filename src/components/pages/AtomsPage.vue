<template>
  <div>
    <h1>{{ msg }}</h1>

    <h2>AppParagraph</h2>
    <AppParagraph
      :content='paragraphText'
      align='left'
    />
    <AppParagraph
      :content='paragraphText'
    />
    <AppParagraph
      :content='paragraphText'
      align='right'
    />
    <h2>AppButton</h2>

    <h3>Square</h3>
    <AppButton
      label='Button'
      shape='square'
    />

    <h3>Round</h3>
    <AppButton
      label='Round Button'
      shape='round'
    />

    <h2>AppInput</h2>
    <AppInput
      type='text'
      placeholder='Placeholder'
    />

    <h2>AppLink</h2>
    <AppLink
      label='Index'
      path="/"
    />
    <AppLink
      label='Github'
      path="https://github.com/"
      :isNewWindow='true'
    />

    <h2>CheckBox</h2>
    <AppCheckBox label='Check Box' />

    <h2>AppLogo</h2>
    <AppLogo />

    <h2>AppTag</h2>
    <AppTag
      label='Tag'
    />
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'
import AppInput from '../atoms/AppInput'
import AppLink from '../atoms/AppLink'
import AppCheckBox from '../atoms/AppCheckBox'
import AppLogo from '../atoms/AppLogo'
import AppTag from '../atoms/AppTag'
import AppParagraph from '../atoms/AppParagraph'

export default {
  name: 'AtomsPage',
  data () {
    return {
      msg: 'Atoms',
      paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  components: {
    AppButton,
    AppInput,
    AppLink,
    AppCheckBox,
    AppLogo,
    AppTag,
    AppParagraph
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
