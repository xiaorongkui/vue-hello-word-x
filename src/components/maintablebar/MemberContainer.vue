<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width:100%;margin:10px auto;height:200px">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options" >
      <!-- slideritem wrapped package with the components you need -->
      <template slot-scope="coverflow">
        <slideritem v-for="(item,index) in someList" :pageLength="someList.length" :index="index" :key="index"
                    :style="item.style">{{item.html}}
        </slideritem>
      </template>
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
  components: {
    slider,
    slideritem
  }
}
</script>
<style lang="scss" scoped>
</style>
