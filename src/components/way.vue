<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    fill="#999999">
    <text
      x="0"
      y="15"
      fill="#dede70"
    >
      {{ filterprice }} $
    </text>
    <g
      v-for="(p, k) in stopslist"
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
      <g v-if="p.start || p.loop">
        <circle
          :cx="p.x*1.5+20"
          :cy="p.y*1.5+20"
          stroke="#de4567"
          fill="#de4567"
          r="2.5"
          stroke-width="0.5"
        />
      </g>
      <g v-else>
        <circle
          :cx="p.x*1.5+20"
          :cy="p.y*1.5+20"
          :stroke="(findactive(p.id))?'#df42df':'#222222'"
          :fill="(findactive(p.id))?'#df42df':'#222222'"
          r="2"
          stroke-width="0.5"
        />
        <text
          v-if="findactive(p.id)"
          :x="p.x*1.5+20"
          :y="p.y*1.5+16"
          stroke="#df42df"
          fill="#df42df"
          class="digital"
          font-size="18"
        >
          {{ tramnum(p.id) }}
        </text>
      </g>
    </g>
  </svg>
</template>
<style scoped>
svg {
  width: inherit;
  height: inherit;
}
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['line', 'stopslist', 'currtram', 'money', 'clientWidth']),
    filterprice () {
      if (!this.money) return '0.0'
      const el = ('' + this.money).split('.')
      const dr = (el[1] !== undefined) ? (el[1].slice(0, 2)) : (this.money)
      return el[0] + '.' + dr
    }
  },
  methods: {
    findactive (id) {
      let active = false
      for (const t of this.line.trams) {
        if (t.idstop === id) active = true
      }
      return active
    },
    tramnum (id) {
      for (const t of this.line.trams) {
        if (t.idstop === id) return t.id + '' + t.mode[0].toUpperCase()
      }
    }
  }
}
</script>
