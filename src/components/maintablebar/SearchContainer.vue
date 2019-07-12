<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width:100%;margin:100px auto;height:180px">
    <!-- Using the slider component -->
    sdfsdgsdgsd
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->
      <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
// import slider components
import {slider, slideritem} from 'vue-concise-slider'

export default {
  data () {
    return {
      someList: [
        {
          html: 'slider1',
          style: {
            'background': '#4abf8a',
            'width': '70%',
            'margin': '1%',
            'border-radius': '6px'
          }
        },
        {
          html: 'slider2',
          style: {
            'background': '#4bbfc3',
            'width': '70%',
            'margin': '1%',
            'border-radius': '6px'
          }
        },
        {
          html: 'slider3',
          style: {
            'background': '#7baabe',
            'width': '70%',
            'margin': '1%',
            'border-radius': '6px'
          }
        },
        {
          html: 'slide4',
          style: {
            'background': '#4abf8a',
            'width': '70%',
            'margin': '1%',
            'border-radius': '6px'
          }
        },
        {
          html: 'slide5',
          style: {
            'background': '#4bbfc3',
            'width': '70%',
            'margin': '1%',
            'border-radius': '6px'
          }
        },
        {
          html: 'slide6',
          style: {
            'background': '#7baabe',
            'width': '70%',
            'margin': '1%',
            'border-radius': '6px'
          }
        }
      ],
      options: {
        currentPage: 0,
        speed: 300,
        itemAnimation: true,
        centeredSlides: true,
        thresholdDistance: 100,
        thresholdTime: 300,
        loopedSlides: 2,
        slidesToScroll: 1,
        loop: true
      }
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>
<style lang="scss" scoped>
  .slider-item {
    transform: scale(0.8);
    transition-timing-function: ease;
    transition-duration: 300ms;
  }

  .slider-item.slider-active {
    transform: scale(1.0);
    z-index: 999;
  }

  .slider-item.slider-active-copy {
    transform: scale(1.0);
    z-index: 999;
  }
</style>
