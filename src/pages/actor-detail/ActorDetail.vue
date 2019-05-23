<template>
  <div>
    <b-container class="actor-detail-container" fluid>
      <b-row>
        <b-col class="mt-4 ml-4 left-content" cols="12" lg="3" v-if="showActor">
          <b-img-lazy class="mr-2 mb-2" width="80" thumbnail src="https://via.placeholder.com/120" fluid></b-img-lazy>
          <p>title</p>
          <p>titletitletitle</p>
          <p>title</p>
          <p>titletitletitletitletitletitletitletitle</p>
          <p>title</p>
        </b-col>
        <b-col>
          <actor-list :list="homeList" @changed="paginationChanged" @notChanged="notChangeShow"></actor-list>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ActorList from 'common/list/ActorList'
import axios from 'axios'

export default {
  name: 'ActorDetail',
  data () {
    return {
      homeList: [],
      showActor: true
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.homeList = data.homeList
      }
    },
    paginationChanged () {
      this.showActor = false
    },
    notChangeShow () {
      this.showActor = true
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  components: {
    ActorList
  }
}
</script>

<style lang="stylus" scoped>
  .actor-detail-container
    margin-top 56px
    .left-content
      word-wrap break-word
</style>
