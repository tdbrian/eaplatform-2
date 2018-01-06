<template>
  <div>
    <span>e<span class="a-color">a</span><span class="inner">Platform</span></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";
div {
  font-size: 26px;
  font-weight: 300;
  color: $primary-color;
  padding-left: 30px;
  padding-top: 18px;
  i {
    color: #717171;
    padding-right: 0;
    font-size: 38px;
  }
  span {
    font-weight: 600;
  }
  .inner {
    color: #535867;
    font-weight: 300;
  }
  .a-color {
    //color: #535867;
  }
}
</style>


