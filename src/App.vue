<template>
  <div id="app">
    <common-header></common-header>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import CommonHeader from 'common/header/Header'

export default {
  name: 'App',
  components: {
    CommonHeader
  }
}
</script>
