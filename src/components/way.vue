<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    width="800"
    height="800"
    fill="#999999">
    <g ref="way">
      <circle
        v-for="(p, k) in lineWay"
        :key="k"
        :сx="p.left / 5 + 500"
        :cy="p.top / 5"
        r="5"
        stroke="#df42df"
        fill="#df42df"
        stroke-width="0.5"
      />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    lineWay: {
      type: Array,
      default: () => []
    }
  },
  created () {
    console.log(this.lineWay)
  }
}
</script>
