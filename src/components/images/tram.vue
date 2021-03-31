<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="tram"
    viewBox="0 0 100 50"
    width="250"
    height="150">
    <g id="wheels">
      <circle
        cx="19.15"
        cy="35"
        r="2"/>
      <circle
        cx="24.15"
        cy="35"
        r="2"/>
      <circle
        cx="51.15"
        cy="35"
        r="2"/>
      <circle
        cx="56.15"
        cy="35"
        r="2"/>

    </g>
    <g id="mustache">
      <line
        x1="52.5"
        y1="15"
        x2="60"
        y2="8.5"
        stroke="#de4378"
        stroke-width="0.55"/>
      <line
        x1="52.5"
        y1="1.5"
        x2="60"
        y2="8.5"
        stroke="#de4378"
        stroke-width="0.55"/>
      <line
        x1="52.5"
        y1="15"
        x2="45"
        y2="8.5"
        stroke="#de4378"
        stroke-width="0.55"/>
      <line
        x1="52.5"
        y1="1.5"
        x2="45"
        y2="8.5"
        stroke="#de4378"
        stroke-width="0.55"/>
      <line
        x1="50"
        y1="0.7"
        x2="55"
        y2="0.7"
        stroke="#de4378"
        stroke-width="0.55"/>
      <line
        x1="52.5"
        y1="0.7"
        x2="52.5"
        y2="1.5"
        stroke="#de4378"
        stroke-width="0.55"/>
    </g>

    <g id="body">
      <rect
        x="5"
        y="15"
        width="68"
        height="20"
        fill="#eeeeee"
        stroke="#343434"
        stroke-width="0.15"
        @click="clmove"/>
      <rect
        x="5.15"
        y="24"
        width="67.70"
        height="5"
        fill="#ee8956"
        stroke="#ee8956"
        stroke-width="0.15"
        @click="clmove"/>
      <g id="windows">
        <rect
          x="5"
          y="15.15"
          width="3"
          height="8.5"
          fill="rgba(34,34,120,0.5)"
          stroke="#999999"
          stroke-width="0.15"/>
        <rect
          x="8.15"
          y="15.15"
          width="9"
          height="8.5"
          fill="rgba(34,34,120,0.5)"
          stroke="#999999"
          stroke-width="0.15"/>
        <rect
          x="33"
          y="15.15"
          width="9"
          height="8.5"
          fill="rgba(34,34,120,0.8)"
          stroke="#999999"
          stroke-width="0.15"/>
        <rect
          x="8.15"
          y="15.15"
          width="9"
          height="8.5"
          fill="rgba(34,34,120,0.5)"
          stroke="#999999"
          stroke-width="0.15"/>
        <rect
          x="58"
          y="15.15"
          width="9"
          height="8.5"
          fill="rgba(34,34,120,0.5)"
          stroke="#999999"
          stroke-width="0.15"/>
        <rect
          x="17.15"
          y="15.15"
          width="16"
          height="8.70"
          fill="rgba(34,34,120,0.5)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <rect
          x="42.15"
          y="15.15"
          width="16"
          height="8.70"
          fill="rgba(34,34,120,0.5)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <rect
          x="67.15"
          y="15.15"
          width="6"
          height="8.70"
          fill="rgba(34,34,120,0.5)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <line
          x1="17.15"
          y1="19"
          x2="33"
          y2="19"
          stroke="#ededed"
          stroke-width="0.15"/>
        <line
          x1="24.75"
          y1="15"
          x2="24.75"
          y2="19"
          stroke="#ededed"
          stroke-width="0.15"/>
        <line
          x1="33.15"
          y1="19"
          x2="58"
          y2="19"
          stroke="#ededed"
          stroke-width="0.15"/>
        <line
          x1="49.75"
          y1="15"
          x2="49.75"
          y2="19"
          stroke="#ededed"
          stroke-width="0.15"/>
      </g>
      <g id="armcharms">
        <g ref="lastarm">
          <rect
            x="8.15"
            y="22"
            width="2"
            height="4"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="8.15"
            y="26"
            width="6"
            height="1"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="10.15"
            y="27"
            width="2"
            height="2"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="17.15"
            y="22"
            width="2"
            height="2"
            fill="#252525"
            stroke="#ee8956"
            stroke-width="0.15"/>
          <g ref="lastpass">
            <circle
              cx="11.15"
              cy="20"
              r="1.3"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="9.55"
              y="21.3"
              width="1.88"
              height="4.5"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="11.05"
              y="24.5"
              width="3.28"
              height="1.4"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="14.55"
              y="24.5"
              width="1.88"
              height="4.5"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
          </g>
        </g>
        <g ref="middlearm">
          <rect
            x="33"
            y="22"
            width="2"
            height="4"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="33"
            y="26"
            width="6"
            height="1"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="35"
            y="27"
            width="2"
            height="2"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="33"
            y="22"
            width="2"
            height="2"
            fill="#252525"
            stroke="#ee8956"
            stroke-width="0.15"/>
          <g ref="middlepass">
            <circle
              cx="36"
              cy="20"
              r="1.3"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="34.55"
              y="21.3"
              width="1.88"
              height="4.5"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="36.05"
              y="24.5"
              width="3.28"
              height="1.4"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="39.55"
              y="24.5"
              width="1.88"
              height="4.5"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
          </g>
        </g>
        <g ref="firstarm">
          <rect
            x="58"
            y="22"
            width="2"
            height="4"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="58"
            y="26"
            width="6"
            height="1"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="60"
            y="27"
            width="2"
            height="2"
            fill="#252525"
            stroke="#252525"
            stroke-width="0.15"/>
          <rect
            x="58"
            y="22"
            width="2"
            height="2"
            fill="#252525"
            stroke="#ee8956"
            stroke-width="0.15"/>
          <g ref="firstpass">
            <circle
              cx="61.15"
              cy="20"
              r="1.3"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="59.55"
              y="21.3"
              width="1.88"
              height="4.5"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="61.05"
              y="24.5"
              width="3.28"
              height="1.4"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
            <rect
              x="64.55"
              y="24.5"
              width="1.88"
              height="4.5"
              fill="#303030"
              stroke="#303030"
              stroke-width="0.15"
            />
          </g>
        </g>
        <rect
          x="24.75"
          y="22"
          width="2"
          height="2"
          fill="#252525"
          stroke="#ee8956"
          stroke-width="0.15"/>
        <rect
          x="42.15"
          y="22"
          width="2"
          height="2"
          fill="#252525"
          stroke="#ee8956"
          stroke-width="0.15"/>
        <rect
          x="49.75"
          y="22"
          width="2"
          height="2"
          fill="#252525"
          stroke="#ee8956"
          stroke-width="0.15"/>
        <rect
          x="67.15"
          y="22"
          width="2"
          height="2"
          fill="#252525"
          stroke="#ee8956"
          stroke-width="0.15"/>
      </g>
      <g id="enter">
        <!-- <rect
          x="8.15"
          y="24"
          width="9"
          height="5"
          fill="#aaaaaa"
          stroke="#999999"
          stroke-width="0.15"/> -->
        <rect
          x="8.15"
          y="29"
          width="9"
          height="3"
          fill="#333333"
          stroke="#eeeeee"
          stroke-width="0.15"/>
        <rect
          x="8.15"
          y="32"
          width="9"
          height="3"
          fill="#222222"
          stroke="#eeeeee"
          stroke-width="0.15"/>
        <!-- <rect
          x="33"
          y="24"
          width="9"
          height="5"
          fill="#aaaaaa"
          stroke="#999999"
          stroke-width="0.15"/> -->
        <rect
          x="33"
          y="29"
          width="9"
          height="3"
          fill="#333333"
          stroke="#eeeeee"
          stroke-width="0.15"/>
        <rect
          x="33"
          y="32"
          width="9"
          height="3"
          fill="#222222"
          stroke="#eeeeee"
          stroke-width="0.15"/>
        <!-- <rect
          x="58"
          y="24"
          width="9"
          height="5"
          fill="#aaaaaa"
          stroke="#999999"
          stroke-width="0.15"/> -->
        <rect
          x="58"
          y="29"
          width="9"
          height="3"
          fill="#333333"
          stroke="#eeeeee"
          stroke-width="0.15"/>
        <rect
          x="58"
          y="32"
          width="9"
          height="3"
          fill="#222222"
          stroke="#eeeeee"
          stroke-width="0.15"/>
      </g>
      <g
        id="door"
        @click="doorclick"
      >
        <rect
          id="lastdoor"
          ref="lastdoor"
          x="8.15"
          y="15.15"
          width="9"
          height="20"
          fill="rgba(34,34,120,0.5)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <rect
          id="middledoor"
          ref="middledoor"
          x="33"
          y="15.15"
          width="9"
          height="20"
          fill="rgba(34,34,120,0.5)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <rect
          id="firstdoor"
          ref="firstdoor"
          x="58"
          y="15.15"
          width="9"
          height="20"
          fill="rgba(34,34,120,0.5)"
          stroke="#ededed"
          stroke-width="0.15"/>
      </g>
      <g
        id="numtab"
        @click="clmove"
      >
        <rect
          id="lnnumber"
          ref="lnnumber"
          x="50"
          y="15"
          width="8"
          height="5.20"
          fill="rgba(34,34,34,0.9)"
          stroke="#ededed"
          stroke-width="0.15"
        />
        <text
          x="51"
          y="19.55"
          fill="#EDeE36"
          font-size="5"
        >
          {{ linenumber }}
        </text>
      </g>
      <g>
        <text
          x="45"
          y="28.55"
          fill="#EDede6"
          font-size="5"
          font-family="'Leckerli One', cursive"
          font-weight="bold"
        >
          {{ tramid }}
        </text>
        <text
          x="10"
          y="5"
          fill="#EDede6"
          font-size="5"
          font-family="'Leckerli One', cursive"
          font-weight="bold"
        >
          {{ count }}
        </text>
        <text
          x="10"
          y="10"
          fill="#EDede6"
          font-size="5"
          font-family="'Leckerli One', cursive"
          font-weight="bold"
        >
          {{ filterprice }}$
        </text>
      </g>
    </g>
  </svg>
</template>
<script>
import { TimelineMax, Back } from 'gsap'
import passunit from './passunit.vue'
export default {
  components: {
    passunit
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
    }
  },
  data () {
    return {
      door: false
    }
  },
  computed: {
    filterprice () {
      if (!this.money) return '0.0'
      const el = ('' + this.money).split('.')
      const dr = el[1].slice(0, 2)
      return el[0] + '.' + dr
    },
    tramid () {
      if (this.id < 10) return '00' + this.id
      else if (this.id >= 10 && this.id <= 99) return '0' + this.id
      else return '' + this.id
    }
  },
  watch: {
    count () {
      console.log(this.count)
      console.log(this.id)
      console.log(this.stop)
      console.log(this.linenumber)
    }
  },
  methods: {
    doorclick () {
      console.log('door')
      const tl = new TimelineMax()
      const posX = (this.door) ? (0) : (8.15)
      tl.to(this.$refs.lastdoor, 0.01, {
        x: posX,
        delay: 0.7,
        ease: Back.easeOut
      }).to(this.$refs.middledoor, 0.01, {
        x: posX,
        delay: 0.7,
        ease: Back.easeOut
      }).to(this.$refs.firstdoor, 0.01, {
        x: posX,
        delay: 0.7,
        ease: Back.easeOut
      })
      if (!this.door) this.$emit('enter')
      this.door = !this.door
    },
    clmove () {
      if (!this.door) {
        console.log('move')
        this.$emit('move')
      }
    }
  }
}
</script>
