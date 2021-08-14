<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="tram"
    viewBox="0 0 100 50"
    width="250"
    height="150">

    <ktm5
      :id="id"
      :linenumber="linenumber"
      :idstop="idstop"
      :count="count"
      :money="money"
      :max="max"
      :mode="mode"
      :blocked="blocked"
      :color="color"
      :door="door"
      @tramclick="tramclick"
    />

  </svg>
</template>
<script>
// import { TimelineMax, Back } from 'gsap'
import passunit from './passunit.vue'
import ktm5 from './ktm/ktm5.vue'
export default {
  components: {
    passunit,
    ktm5
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    linenumber: {
      type: Number,
      default: 0
    },
    idstop: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    money: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'to'
    },
    blocked: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      door: false
    }
  },
  computed: {
    posDoor () {
      return (!this.door) ? (0) : (8.15)
    }
  },
  methods: {
    tramclick () {
      console.log('tram click')
      if (!this.door) {
        this.$emit('enter')
      } else {
        this.$emit('move')
      }
      this.door = !this.door
    }
  }
}
</script>
