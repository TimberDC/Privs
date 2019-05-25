<template>
  <div>
    <b-container class="desc-container" fluid>
      <b-row class="ml-md-5 ml-lg-0">
        <b-col lg="7">
          <b-img-lazy :src="coverImg || ''" fluid style="box-shadow: 0 3px 10px rgba(0,0,0,.3);"></b-img-lazy>
        </b-col>
        <b-col class="mt-4 mt-lg-0">
          <p class="title">{{list.title}}</p>
          <p class="id">{{list.content_id}}</p>
          <p class="date">{{list.date}}</p>
          <p class="average" v-if="list.average">评分：{{list.average}}分</p>
          <p class="time">时长：{{list.volume}}分钟</p>
          <div class="more">
            <b-button
              class="mb-2 mt-2"
              size="sm"
              v-b-toggle.collapse-a
              variant="info"
            >
              更多
            </b-button>
            <!-- Elements to collapse -->
            <b-collapse id="collapse-a" class="mt-2">
              <b-card class="mt-2" title="类别" title-tag="h6" v-if="genre">
                <b-link class="mr-3" v-for="item in genre" :key="item.id">{{item.name}}</b-link>
              </b-card>
              <b-card class="mt-2" title="系列" title-tag="h6" v-if="series">
                <b-link class="mr-3" v-for="item in series" :key="item.id">{{item.name}}</b-link>
              </b-card>
              <b-card class="mt-2" title="制造商" title-tag="h6" v-if="maker">
                <b-link class="mr-3" v-for="item in maker" :key="item.id">{{item.name}}</b-link>
              </b-card>
              <b-card class="mt-2" title="导演" title-tag="h6" v-if="director">
                <b-link class="mr-3" v-for="item in director" :key="item.id">{{item.name}}</b-link>
              </b-card>
              <b-card class="mt-2" title="标签" title-tag="h6" v-if="label">
                <b-link class="mr-3" v-for="item in label" :key="item.id">{{item.name}}</b-link>
              </b-card>
            </b-collapse>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-lg-3" fluid v-if="this.actor.length">
      <b-row class="ml-md-5 ml-lg-0 mb-1">
        <b-col>
          <h4>演员</h4>
        </b-col>
      </b-row>
      <b-row class="ml-1 ml-lg-0">
        <div class="actor-container" v-for="(item, index) in actor" :key="item.id">
          <b-img-lazy
            width="80"
            thumbnail
            :src="actorImg[index] || ''"
            fluid
            style="box-shadow: 0 1px 3px rgba(0,0,0,.3);"
          >
          </b-img-lazy>
          <p class="actor-name">{{item.name}}</p>
        </div>
      </b-row>
    </b-container>
    <b-container class="mt-lg-3" fluid v-if="this.sampleImg.length">
      <b-row class="ml-md-5 ml-lg-0 mb-1">
        <b-col>
          <h4>剧照</h4>
        </b-col>
      </b-row>
      <b-row class="ml-md-5 ml-lg-0">
        <b-col>
          <div class="exp-img-container" @click="handleImgClicked">
            <b-img-lazy
              class="mr-2 mr-lg-4 mb-4"
              width="160"
              :src="item || ''"
              fluid
              v-for="(item, index) in sampleImg"
              :key="index"
              style="box-shadow: 0 3px 10px rgba(0,0,0,.3);"
            >
            </b-img-lazy>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-lg-3 mb-4" fluid>
      <b-row class="ml-md-5 ml-lg-0 mb-1">
        <b-col>
          <h4>预览</h4>
        </b-col>
      </b-row>
      <b-row class="ml-md-5 ml-lg-0 mr-lg-1" v-show="showPlayer">
        <b-col>
          <div style="background: black">
            <b-embed
              type="video"
              :src="url || ''"
              controls
              preload
            ></b-embed>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <gallary v-show="showBigImg" @close="handleBigImgClosed" :img="largeImg"></gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import { getDetailList, getVideoUrl, getLargeImg, getActorID, getActorImg } from 'api/detail'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'

export default {
  name: 'Detail',
  data () {
    return {
      showBigImg: false,
      // 解决安卓播放器默认最顶层的问题
      showPlayer: true,
      detailId: '',
      url: '',
      list: [],
      coverImg: '',
      sampleImg: [],
      largeImg: [],
      genre: [],
      series: [],
      maker: [],
      director: [],
      label: [],
      actor: [],
      actorID: [],
      actorImg: []
    }
  },
  methods: {
    getDetailInfo () {
      getDetailList(this.commonKind, this.detailId).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.list = res.items[0]
          this.coverImg = this.list.imageURL.large
          if (this.list.sampleImageURL) {
            this.sampleImg = this.list.sampleImageURL.sample_s.image
          }
          this.genre = this.list.iteminfo.genre
          this.series = this.list.iteminfo.series
          this.maker = this.list.iteminfo.maker
          this.director = this.list.iteminfo.director
          this.label = this.list.iteminfo.label
          if (this.list.iteminfo.actress) {
            this.actor = this.list.iteminfo.actress
            this.actorID = getActorID(this.actor)
            this.actorImg = getActorImg(this.actorID)
          }
        }
        if (this.sampleImg.length) {
          this.largeImg = getLargeImg(this.sampleImg)
        }
      })
    },
    handleImgClicked () {
      this.showBigImg = true
      this.showPlayer = false
      window.scrollTo(0, 0)
    },
    handleBigImgClosed () {
      this.showBigImg = false
      this.showPlayer = true
    }
  },
  components: {
    Gallary
  },
  computed: {
    ...mapGetters([
      'commonKind'
    ])
  },
  mounted () {
    this.detailId = this.$route.params.id
    this.getDetailInfo()
    this.url = getVideoUrl(this.detailId)
  }
}
</script>

<style lang="stylus" scoped>
  .desc-container
    margin-top 71px
    .date
      color red
  .actor-container
    width 90px
    height 110px
    margin 0 5px
    text-align center
    .actor-name
      margin-top 2px
      font-size 14px
      font-weight bold
    p
      margin-bottom 0
</style>
