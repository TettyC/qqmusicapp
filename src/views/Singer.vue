<template>
  <div class="singer" v-loading="!singerList.length">
    <index-list :data="singerList"></index-list>
  </div>
</template>
<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/base/indexList/IndexList.vue'
export default {
  components: { IndexList },
  name: 'Singer',
  data() {
    return {
      singerList: []
    }
  },
  async created() {
    const result = await getSingerList()
    this.singerList = result.singers
  }
}
</script>
<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
