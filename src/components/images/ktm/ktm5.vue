<template>
  <g>
    <linearGradient
      id="windowcolor"
      x1="0"
      x2="0"
      y1="0"
      y2="1"
    >
      <stop
        stop-color="#1243a0"
        stop-opacity="0.7"
        offset="0%"/>
      <stop
        stop-color="#1243a0"
        stop-opacity="0.9"
        offset="40%"/>
      <stop
        stop-color="blue"
        stop-opacity="0.7"
        offset="60%"/>
    </linearGradient>
    <linearGradient
      id="bodybottom"
      x1="0"
      x2="0"
      y1="0"
      y2="1"
    >
      <stop
        stop-color="white"
        stop-opacity="0.9"
        offset="0%"/>
      <stop
        stop-color="white"
        stop-opacity="0.7"
        offset="40%"/>
      <stop
        stop-color="white"
        stop-opacity="0.8"
        offset="60%"/>
      <stop
        stop-color="#dedede"
        stop-opacity="0.5"
        offset="80%"/>
    </linearGradient>
    <radialGradient id="ring">
      <stop
        stop-color="#636363"
        stop-opacity="1"
        offset="0%"/>
      <stop
        stop-color="black"
        stop-opacity="1"
        offset="60%"/>
      <stop
        stop-color="#232323"
        stop-opacity="1"
        offset="70%"/>
      <stop
        stop-color="#333333"
        stop-opacity="1"
        offset="90%"/>
    </radialGradient>
    <g
      v-if="color === 'red'"
      id="ktm5red">
      <linearGradient
        id="doorcolor"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop
          stop-color="navy"
          stop-opacity="0.5"
          offset="0%"/>
        <stop
          stop-color="#5de4e0"
          stop-opacity="0.3"
          offset="20%"/>
        <stop
          stop-color="navy"
          stop-opacity="0.6"
          offset="40%"/>
        <stop
          stop-color="#ed5450"
          stop-opacity="1"
          offset="45%"/>
        <stop
          stop-color="#ed1410"
          stop-opacity="1"
          offset="100%"/>
      </linearGradient>
      <linearGradient
        id="bodycolor"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop
          stop-color="#ed2420"
          stop-opacity="0.6"
          offset="0%"/>
        <stop
          stop-color="red"
          stop-opacity="0.8"
          offset="20%"/>
        <stop
          stop-color="#ed2420"
          stop-opacity="0.6"
          offset="40%"/>
        <stop
          stop-color="red"
          stop-opacity="0.8"
          offset="60%"/>
        <stop
          stop-color="#ed2420"
          stop-opacity="0.6"
          offset="80%"/>
        <stop
          stop-color="red"
          stop-opacity="0.8"
          offset="100%"/>
      </linearGradient>
    </g>
    <g
      v-if="color === 'yellow'"
      id="ktm5yellow">
      <linearGradient
        id="doorcolor"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop
          stop-color="navy"
          stop-opacity="0.5"
          offset="0%"/>
        <stop
          stop-color="#2de2c0"
          stop-opacity="0.3"
          offset="20%"/>
        <stop
          stop-color="navy"
          stop-opacity="0.6"
          offset="40%"/>
        <stop
          stop-color="#bdc450"
          stop-opacity="1"
          offset="45%"/>
        <stop
          stop-color="#7d7220"
          stop-opacity="1"
          offset="100%"/>
      </linearGradient>
      <linearGradient
        id="bodycolor"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop
          stop-color="#7d7420"
          stop-opacity="0.6"
          offset="0%"/>
        <stop
          stop-color="#ada220"
          stop-opacity="0.8"
          offset="20%"/>
        <stop
          stop-color="#7d7420"
          stop-opacity="0.6"
          offset="40%"/>
        <stop
          stop-color="#ada220"
          stop-opacity="0.8"
          offset="60%"/>
        <stop
          stop-color="#7d7420"
          stop-opacity="0.6"
          offset="80%"/>
        <stop
          stop-color="#ada220"
          stop-opacity="0.8"
          offset="100%"/>
      </linearGradient>
    </g>
    <g
      v-if="color === 'blue'"
      id="ktm5blue">
      <linearGradient
        id="doorcolor"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop
          stop-color="navy"
          stop-opacity="0.5"
          offset="0%"/>
        <stop
          stop-color="#5de4e0"
          stop-opacity="0.3"
          offset="20%"/>
        <stop
          stop-color="navy"
          stop-opacity="0.6"
          offset="40%"/>
        <stop
          stop-color="#3d74d0"
          stop-opacity="1"
          offset="45%"/>
        <stop
          stop-color="#3d64c0"
          stop-opacity="0.9"
          offset="100%"/>
      </linearGradient>
      <linearGradient
        id="bodycolor"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop
          stop-color="blue"
          stop-opacity="0.7"
          offset="0%"/>
        <stop
          stop-color="#2257e0"
          stop-opacity="0.6"
          offset="20%"/>
        <stop
          stop-color="blue"
          stop-opacity="0.7"
          offset="40%"/>
        <stop
          stop-color="#2257e0"
          stop-opacity="0.6"
          offset="60%"/>
        <stop
          stop-color="blue"
          stop-opacity="0.7"
          offset="80%"/>
        <stop
          stop-color="#2257e0"
          stop-opacity="0.8"
          offset="100%"/>
      </linearGradient>
    </g>
    <g id="mustache">
      <line
        :x1="directtram"
        :x2="directtram + 7.5"
        y1="15"
        y2="9.5"
        stroke="#de4328"
        stroke-width="0.75"/>
      <line
        :x1="directtram"
        :x2="directtram + 7.5"
        y1="3.5"
        y2="9.5"
        stroke="#de4328"
        stroke-width="0.75"/>
      <line
        :x1="directtram"
        :x2="directtram - 7.5"
        y1="15"
        y2="9.5"
        stroke="#de4328"
        stroke-width="0.75"/>
      <line
        :x1="directtram"
        :x2="directtram - 7.5"
        y1="3.5"
        y2="9.5"
        stroke="#de4328"
        stroke-width="0.75"/>
      <line
        :x1="directtram - 2.5"
        :x2="directtram + 2.5"
        y1="3.4"
        y2="3.4"
        stroke="#de4328"
        stroke-width="0.75"/>
      <line
        :x1="directtram"
        :x2="directtram"
        y1="3.4"
        y2="3.5"
        stroke="#de4328"
        stroke-width="0.75"/>
    </g>

    <g
      id="body"
      @click="$emit('tramclick')"
    >
      <rect
        x="5"
        y="15"
        width="68"
        height="20"
        fill="url(#bodybottom)"
        stroke="#343434"
        stroke-width="0.15"
      />
      <rect
        id="bodycolor"
        x="5.15"
        y="24"
        width="67.70"
        height="7"
        fill="url(#bodycolor)"
        stroke="#ee59e6"
        stroke-width="0.15"
      />
      <text
        :x="(directtram === 20.5)?(22):(48)"
        y="28.95"
        fill="#EDede6"
        font-size="6"
        font-family="Courier new"
        font-weight="bold"
      >
        {{ tramid }}
      </text>
      <g id="wheels">
        <rect
          x="18"
          y="32.5"
          width="12"
          height="2.5"
          fill="#444"
        />
        <rect
          x="43.5"
          y="32.5"
          width="12"
          height="2.5"
          fill="#444"
        />
        <circle
          cx="21.65"
          cy="35"
          r="2"
          fill="url(#ring)"
        />
        <circle
          cx="26.65"
          cy="35"
          r="2"
          fill="url(#ring)"
        />
        <circle
          cx="47.15"
          cy="35"
          r="2"
          fill="url(#ring)"
        />
        <circle
          cx="52.15"
          cy="35"
          r="2"
          fill="url(#ring)"
        />
      </g>
      <g id="windows">
        <rect
          x="5"
          y="15.15"
          width="3"
          height="8.5"
          fill="url(#windowcolor)"
          stroke="#999999"
          stroke-width="0.15"/>
        <rect
          x="8.15"
          y="15.15"
          width="9"
          height="8.5"
          fill="url(#windowcolor)"
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
          fill="url(#windowcolor)"
          stroke="#999999"
          stroke-width="0.15"/>
        <rect
          x="58"
          y="15.15"
          width="9"
          height="8.5"
          fill="url(#windowcolor)"
          stroke="#999999"
          stroke-width="0.15"/>
        <rect
          x="17.15"
          y="15.15"
          width="16"
          height="8.70"
          fill="url(#windowcolor)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <rect
          x="42.15"
          y="15.15"
          width="16"
          height="8.70"
          fill="url(#windowcolor)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <rect
          x="67.15"
          y="15.15"
          width="6"
          height="8.70"
          fill="url(#windowcolor)"
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
          fill="rgba(88,88,88, 0.8)"
          stroke="rgba(18,18,18, 0.7)"
          stroke-width="0.1"/>
        <rect
          x="8.15"
          y="31.5"
          width="9"
          height="3"
          fill="rgba(68,68,68, 0.8)"
          stroke="rgba(18,18,18, 0.7)"
          stroke-width="0.1"/>
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
          fill="rgba(88,88,88, 0.8)"
          stroke="rgba(18,18,18, 0.7)"
          stroke-width="0.1"/>
        <rect
          x="33"
          y="31.5"
          width="9"
          height="3"
          fill="rgba(68,68,68, 0.8)"
          stroke="rgba(18,18,18, 0.7)"
          stroke-width="0.1"/>
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
          fill="rgba(88,88,88, 0.8)"
          stroke="rgba(18,18,18, 0.7)"
          stroke-width="0.1"/>
        <rect
          x="58"
          y="31.5"
          width="9"
          height="3"
          fill="rgba(68,68,68, 0.8)"
          stroke="rgba(18,18,18, 0.7)"
          stroke-width="0.1"/>
      </g>
      <g id="numtab">
        <rect
          id="lnnumber"
          ref="lnnumber"
          :x="directtram - 2.5"
          y="15"
          width="8"
          height="5.20"
          fill="rgba(34,34,34,0.9)"
          stroke="#ededed"
          stroke-width="0.15"
        />
        <text
          :x="directtram - 2.5"
          y="19.85"
          fill="#EDeE36"
          font-size="6.5"
        >
          {{ linenumber }}
        </text>
      </g>
      <g>
        <text
          x="10"
          y="5"
          fill="#EDede6"
          font-size="5"
          font-family="'Leckerli One', cursive"
          font-weight="bold"
        >
          {{ (!blocked)?(count):('blocked') }}
        </text>
      </g>
      <g id="door">
        <rect
          id="lastdoor"
          ref="lastdoor"
          :x="8.15+posDoor"
          y="15.15"
          width="9"
          height="20"
          fill="url(#doorcolor)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <rect
          id="middledoor"
          ref="middledoor"
          :x="33+posDoor"
          y="15.15"
          width="9"
          height="20"
          fill="url(#doorcolor)"
          stroke="#ededed"
          stroke-width="0.15"/>
        <rect
          id="firstdoor"
          ref="firstdoor"
          :x="58-posDoor"
          y="15.15"
          width="9"
          height="20"
          fill="url(#doorcolor)"
          stroke="#ededed"
          stroke-width="0.15"/>
      </g>
    </g>
  </g>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'red'
    },
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
    door: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'to'
    },
    blocked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    directtram () {
      if (this.mode === 'to') {
        return 52.5
      } else if (this.mode === 'from') {
        return 20.5
      }
    },
    tramid () {
      if (this.id < 10) return '00' + this.id
      else if (this.id >= 10 && this.id <= 99) return '0' + this.id
      else return '' + this.id
    },
    posDoor () {
      return (!this.door) ? (0) : (8.15)
    }
  }
}
</script>
