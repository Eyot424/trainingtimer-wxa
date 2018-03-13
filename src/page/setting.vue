<template>
  <div class="container" :style="{ height: height }">
    <div class="demo">
      <wxc-minibar title="设置训练项目"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   right-text="about me"
                   leftButton=""
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
    </div>
    <div class="group">
      <text class="label">Time: </text>
      <text class="title">{{value}}</text>
    </div>
    <div class="group">
      <text class="button" @click="pickType">Pick</text>
    </div>
  </div>
</template>

<script>
  import { WxcMinibar } from 'weex-ui'
  const modal = weex.requireModule('modal')
  const picker = weex.requireModule('picker')

  export default {
    components: { WxcMinibar },
    data() {
      return {
        height: '90px',
        value: ''
      }
    },
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({
          message: 'This is a toast',
          duration: 0.3
        })
      },
      pickType () {
        picker.pick({
          index: 1,
          item: ['胸部训练', '背部训练', '腿部训练', '肩部训练', '核心训练', '三头二头训练']
        }, ret => {
          if (ret.result === 'success') {
            this.value = ret.data
          }
        })
      }
    }
  }
</script>