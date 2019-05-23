<template>
    <div class="container" @click="handleGallaryClick">
      <div @click.stop>
        <b-img-lazy
          class="mt-2 mb-2 large-image"
          :src=item
          fluid
          @click.stop
          v-for="(item, index) in img"
          :key="index"
        >
        </b-img-lazy>
      </div>
      <div class="closeButton">
        <span class="iconfont closeItem">&#xe69d;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    img: Array
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    margin-top 56px
    z-index 99
    position absolute
    top 0
    left 0
    right 0
    background #000
    max-width 100%
    text-align center
    .large-image
      padding 10px 0
    .closeButton
      position fixed
      width 42px
      height 42px
      background white
      border-radius 42px
      text-align center
      line-height 42px
      cursor pointer
      right 1rem
      bottom 1rem
      .closeItem
        font-size 40px
    .closeButton:hover
      background #DC3545
      color white
</style>
