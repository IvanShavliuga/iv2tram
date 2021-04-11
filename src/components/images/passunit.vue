<template>
  <g>
    <circle
      :cx="passX"
      :cy="passY"
      :fill="passColor"
      r="2.5"
    />
    <rect
      :x="passX-1.5"
      :y="passY+2.5"
      :fill="passColor"
      width="3"
      height="8"
    />
    <line
      :x1="passX-3.5"
      :y1="passY+3.5"
      :x2="passX+3.5"
      :y2="passY+3.5"
      :stroke="passColor"
      stroke-width="1.5"
    />
    <line
      :x1="passX-2.5"
      :y1="passY+3.5"
      :x2="passX-2.5"
      :y2="passY+7.5"
      :stroke="passColor"
      stroke-width="1.5"
    />
    <line
      :x1="passX+2.5"
      :y1="passY+3.5"
      :x2="passX+2.5"
      :y2="passY+7.5"
      :stroke="passColor"
      stroke-width="1.5"
    />
    <line
      :x1="passX-0.9"
      :y1="passY+8"
      :x2="passX-0.9"
      :y2="passY+15"
      :stroke="passColor"
      stroke-width="1.5"
    />
    <line
      :x1="passX+0.9"
      :y1="passY+8"
      :x2="passX+0.9"
      :y2="passY+15"
      :stroke="passColor"
      stroke-width="1.5"
    />
  </g>
</template>
<script>
export default {
  props: {
    passX: {
      type: Number,
      default: 0
    },
    passY: {
      type: Number,
      default: 0
    },
    passColor: {
      type: String,
      default: 'rgba(200, 200, 60, 0.6)'
    }
  }
}
</script>
