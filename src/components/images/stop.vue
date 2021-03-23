<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="tram"
    viewBox="0 0 100 50"
    width="150"
    height="70">
    <rect
      v-for="ln in 10"
      :key="ln"
      :fill="(ln % 2) ? ('#121212') : ('#dfdfdf')"
      :x="ln*10 - 20"
      y="2"
      width="10"
      height="2"
      stroke="#343434"
      stroke-width="0.15"/>
    <text
      x="10"
      y="30"
      fill="#EDede6"
      font-size="9"
      font-family="'Leckerli One', cursive"
      font-weight="bold"
    >
      {{ name }}
    </text>
    <rect
      :fill="(active) ? '#dedede' : ('#555555')"
      x="5"
      y="7"
      width="40"
      height="15"
      stroke="#343434"
      stroke-width="0.15"/>
    <text
      v-if="active"
      x="10"
      y="17"
      fill="#9e9e25"
      font-size="7"
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
