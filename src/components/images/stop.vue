<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="stop"
    viewBox="0 0 100 50"
    width="250"
    height="150">
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
      id="brus"
      x1="0"
      x2="2"
      y1="0"
      y2="0"
    >
      <stop
        stop-color="#777"
        stop-opacity="0.9"
        offset="0%"/>
      <stop
        stop-color="#222"
        stop-opacity="0.9"
        offset="10%"/>
      <stop
        stop-color="#777"
        stop-opacity="0.9"
        offset="20%"/>
      <stop
        stop-color="#222"
        stop-opacity="0.9"
        offset="30%"/>
      <stop
        stop-color="#777"
        stop-opacity="0.9"
        offset="40%"/>
      <stop
        stop-color="#222"
        stop-opacity="0.9"
        offset="50%"/>
      <stop
        stop-color="#777"
        stop-opacity="0.9"
        offset="60%"/>
      <stop
        stop-color="#222"
        stop-opacity="0.9"
        offset="70%"/>
      <stop
        stop-color="#777"
        stop-opacity="0.9"
        offset="80%"/>
      <stop
        stop-color="#121212"
        stop-opacity="0.9"
        offset="90%"/>
      <stop
        stop-color="#979797"
        stop-opacity="0.9"
        offset="100%"/>
    </linearGradient>
    <rect
      v-for="r in 15"
      :key="r + name"
      :x="r*15 - 150"
      y="2"
      width="17"
      height="2"
      fill="url(#rails)"
      stroke="url(#rails)"
      stroke-width="0.15"/>
    <rect
      v-for="r in 15"
      :key="r"
      :x="r*15 - 150"
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
      font-family="'Leckerli One', cursive"
    >
      {{ name }}
    </text>
    <rect
      :fill="(active) ? '#fefefe' : ('#bbbbbb')"
      x="5"
      y="7"
      width="40"
      height="15"
      stroke="#343434"
      stroke-width="0.15"/>
    <text
      v-if="active"
      x="8"
      y="17"
      fill="#2e2e95"
      font-size="9"
      font-family="'Leckerli One', cursive"
      font-weight="bold"
    >
      {{ countIn }} | {{ countOut }}
    </text>
  </svg>
</template>
<script>
export default {
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
    }
  }
}
</script>
