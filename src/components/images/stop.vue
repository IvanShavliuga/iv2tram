<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 50"
    width="250"
    height="140">
    <linearGradient
      id="fieldbottom"
      x1="0"
      x2="0"
      y1="0"
      y2="1"
    >
      <stop
        stop-color="#245"
        stop-opacity="0.6"
        offset="0%"/>
      <stop
        stop-color="#5a6"
        stop-opacity="0.7"
        offset="10%"/>
      <stop
        stop-color="#434349"
        stop-opacity="0.5"
        offset="40%"/>
      <stop
        stop-color="#eee"
        stop-opacity="0.5"
        offset="41%"/>
      <stop
        stop-color="#224"
        stop-opacity="0.6"
        offset="42%"/>
      <stop
        stop-color="#224"
        stop-opacity="0.6"
        offset="69%"/>
      <stop
        stop-color="#eee"
        stop-opacity="0.5"
        offset="70%"/>
      <stop
        stop-color="#232359"
        stop-opacity="0.5"
        offset="71%"/>
      <stop
        stop-color="#23e329"
        stop-opacity="0.5"
        offset="100%"/>
    </linearGradient>
    <linearGradient
      id="greenfield"
      x1="0"
      x2="0"
      y1="1"
      y2="0"
    >
      <stop
        stop-color="#898"
        stop-opacity="0.6"
        offset="0%"/>
      <stop
        stop-color="#2a5"
        stop-opacity="0.7"
        offset="50%"/>
      <stop
        stop-color="green"
        stop-opacity="0.9"
        offset="100%"/>
    </linearGradient>
    <linearGradient
      id="rails"
      x1="0"
      x2="0"
      y1="0"
      y2="1"
    >
      <stop
        stop-color="#cccccc"
        stop-opacity="0.5"
        offset="0%"/>
      <stop
        stop-color="#303030"
        stop-opacity="0.5"
        offset="20%"/>
      <stop
        stop-color="#101010"
        stop-opacity="0.8"
        offset="40%"/>
      <stop
        stop-color="#444"
        stop-opacity="0.8"
        offset="60%"/>
      <stop
        stop-color="#222"
        stop-opacity="0.9"
        offset="80%"/>
      <stop
        stop-color="#222"
        stop-opacity="0.9"
        offset="100%"/>
    </linearGradient>
    <linearGradient
      id="stopbrus"
      x1="0"
      x2="2"
      y1="0"
      y2="0"
      spreadMethod="repeat"
    >
      <stop
        stop-color="#aaa"
        offset="0%"/>
      <stop
        stop-color="#eee"
        offset="10%"/>
      <stop
        stop-color="#aaa"
        offset="20%"/>
      <stop
        stop-color="#eee"
        offset="30%"/>
      <stop
        stop-color="#aaa"
        offset="40%"/>
      <stop
        stop-color="#eee"
        offset="50%"/>
      <stop
        stop-color="#aaa"
        offset="60%"/>
      <stop
        stop-color="#eee"
        offset="70%"/>
      <stop
        stop-color="#aaa"
        offset="80%"/>
      <stop
        stop-color="#eee"
        offset="90%"/>
      <stop
        stop-color="#aaa"
        offset="100%"/>
    </linearGradient>
    <linearGradient
      id="brus"
      x1="0"
      x2="2"
      y1="0"
      y2="0"
    >
      <stop
        stop-color="#aaa"
        stop-opacity="0.9"
        offset="0%"/>
      <stop
        stop-color="#111"
        stop-opacity="0.9"
        offset="10%"/>
      <stop
        stop-color="#aaa"
        stop-opacity="0.9"
        offset="20%"/>
      <stop
        stop-color="#111"
        stop-opacity="0.9"
        offset="30%"/>
      <stop
        stop-color="#aaa"
        stop-opacity="0.9"
        offset="40%"/>
      <stop
        stop-color="#111"
        stop-opacity="0.9"
        offset="50%"/>
      <stop
        stop-color="#aaa"
        stop-opacity="0.9"
        offset="60%"/>
      <stop
        stop-color="#111"
        stop-opacity="0.9"
        offset="70%"/>
      <stop
        stop-color="#aaa"
        stop-opacity="0.9"
        offset="80%"/>
      <stop
        stop-color="#111"
        stop-opacity="0.9"
        offset="90%"/>
      <stop
        stop-color="#aaa"
        stop-opacity="0.9"
        offset="100%"/>
    </linearGradient>
    <rect
      x="45"
      y="5"
      width="100"
      height="15"
      fill="url(#fieldbottom)"
    />
    <rect
      x="0"
      y="5"
      width="5"
      height="15"
      fill="url(#fieldbottom)"
    />
    <rect
      x="0"
      y="20"
      width="100"
      height="22"
      fill="url(#greenfield)"
    />
    <rect
      v-for="r in 15"
      :key="r + name"
      :x="r*16 - 150"
      y="2"
      width="17"
      height="2"
      fill="url(#rails)"
      stroke="url(#rails)"
      stroke-width="0.15"/>
    <rect
      v-for="r in 15"
      :key="r"
      :x="r*16 - 150"
      y="4"
      width="17"
      height="1"
      fill="url(#brus)"
      stroke="url(#brus)"
      stroke-width="0.15"/>
    <text
      x="0"
      y="30"
      fill="#EDede6"
      font-size="7"
      font-weight="bold"
      font-family="Courier new"
    >
      {{ name }}
    </text>
    <rect
      :opacity="(active) ? 0.5 : 0.2"
      fill="url(#stopbrus)"
      x="5"
      y="5"
      width="40"
      height="15"
      stroke="#343434"
      stroke-width="0.15"/>
    <g v-if="active">
      <passunit
        v-for="p in passCount"
        :key="name+p"
        :pass-x="7+p*8-8"
        :pass-y="2"
        :pass-color="'rgba(250, 250, 250, 0.6)'"
      />
    </g>
    <rect
      x="10"
      y="17"
      width="10"
      height="2"
      fill="#c5c595"
    />
    <rect
      x="10"
      y="19"
      width="2"
      height="3"
      fill="#959595"
    />
    <rect
      x="18"
      y="19"
      width="2"
      height="3"
      fill="#959595"
    />
    <rect
      x="43"
      y="8"
      width="0.5"
      height="10"
      fill="black"
    />
    <rect
      x="38"
      y="0"
      width="10"
      height="8"
      fill="blue"
    />
    <text
      x="38.7"
      y="4"
      fill="#EDede6"
      font-size="4"
      font-family="Courier new"
      font-weight="bold"
    >
      {{ lineNumber }}
    </text>
  </svg>
</template>
<script>
import passunit from './passunit.vue'
export default {
  components: {
    passunit
  },
  props: {
    name: {
      type: String,
      default: 'stop: NaN'
    },
    active: {
      type: Boolean,
      default: false
    },
    countIn: {
      type: Number,
      default: 0
    },
    countOut: {
      type: Number,
      default: 0
    },
    lineNumber: {
      type: Number,
      default: 1
    },
    widthStop: {
      type: Number,
      default: 250
    }
  },
  computed: {
    passCount () {
      return ~~((this.countIn + this.countOut) / 25) + 1
    }
  }
}
</script>
