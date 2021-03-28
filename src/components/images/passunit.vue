<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="tram"
    viewBox="0 0 30 65"
    width="15"
    height="25">
    <circle
      :cx="passX"
      :cy="passY"
      r="2.5"
      fill="rgba(200, 200, 60, 0.6)"
    />
  </svg>
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
    }
  }
}
</script>
