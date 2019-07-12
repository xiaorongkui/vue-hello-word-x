<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <button v-preventReClick v-on:click="clickbt">点击</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      someList: [
        {
          html: 'slider1',
          style: {
            'background': '#4abf8a',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slider2',
          style: {
            'background': '#4bbfc3',
            'width': '50%'
          }
        },
        {
          html: 'slider3',
          style: {
            'background': '#7baabe',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slider4',
          style: {
            'background': '#4abf8a',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slider5',
          style: {
            'background': '#4bbfc3',
            'width': '33.33333333%'
          }
        },
        {
          html: 'slider6',
          style: {
            'background': '#7baabe',
            'width': '33.33333333%'
          }
        }
      ],
      options: {
        effect: 'coverflow',
        currentPage: 0,
        thresholdDistance: 100,
        thresholdTime: 300,
        deviation: 200,
        widthScalingRatio: 0.8,
        heightScalingRatio: 0.8,
        slidesToScroll: 1,
        loop: true
      }
    }
  },
  methods: {
    clickbt () {
      console.log('dianjiafh')
    }
  }
}
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: pink;
      }
      &:nth-child(3) {
        background-color: green;
      }
    }
  }
</style>
