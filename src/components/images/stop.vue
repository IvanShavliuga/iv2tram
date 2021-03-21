<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="tram"
    viewBox="0 0 100 50"
    width="200"
    height="100">
    <rect
      v-for="ln in 10"
      :key="ln"
      :fill="(ln % 2) ? ('#121212') : ('#dfdfdf')"
      :x="ln*10"
      y="2"
      width="10"
      height="2"
      stroke="#343434"
      stroke-width="0.15"/>
    <text
      x="10"
      y="10"
      fill="#EDede6"
      font-size="5"
      font-family="'Leckerli One', cursive"
      font-weight="bold"
    >
      {{ name }}
    </text>
    <rect
      :fill="(active) ? '#dedede' : ('#555555')"
      x="5"
      y="15"
      width="40"
      height="15"
      stroke="#343434"
      stroke-width="0.15"/>
    <text
      x="25"
      y="15"
      fill="#323232"
      font-size="5"
      font-family="'Leckerli One', cursive"
      font-weight="bold"
    >
      {{ count }}
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
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>
