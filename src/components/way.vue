<template>
  <svg
    :width="svgWidth"
    :height="svgWidth"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    fill="#999999">
    <text
      x="5"
      y="15"
      fill="#dede70"
    >
      {{ filterprice }} $
    </text>
    <g
      v-for="(p, k) in line.way"
      :key="k"
    >
      <line
        v-for="(v, k1) in p.vectors"
        :key="k1"
        :x1="(p.x + v.x)*1.5+20"
        :y1="(p.y + v.y)*1.5+20"
        :x2="p.x*1.5+20"
        :y2="p.y*1.5+20"
        r="2.5"
        stroke="#222222"
        fill="#222222"
        stroke-width="0.5"
      />
      <circle
        :cx="p.x*1.5+20"
        :cy="p.y*1.5+20"
        :stroke="(findactive(p.id))?'#df42df':'#222222'"
        :fill="(findactive(p.id))?'#df42df':'#222222'"
        r="2.5"
        stroke-width="0.5"
      />
    </g>
  </svg>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['line', 'currtram', 'money', 'clientWidth']),
    filterprice () {
      if (!this.money) return '0.0'
      const el = ('' + this.money).split('.')
      const dr = (el[1] !== undefined) ? (el[1].slice(0, 2)) : (this.money)
      return el[0] + '.' + dr
    },
    svgWidth () {
      if (this.clientWidth < 800) {
        return this.clientWidth / 2
      }
      return 600
    }
  },
  methods: {
    findactive (id) {
      return id === this.currtram.idstop
    }
  }
}
</script>
