<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">TettyC Music</h1>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
.header {
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: $font-size-large;
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    background-size: 30px 32px;
    @include bg-image('logo');
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    // font-size: $font-size-large;
  }
}
</style>
