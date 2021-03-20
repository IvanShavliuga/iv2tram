<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <p>test</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filelink: '',
      files: [],
      id: 0,
      folder: 1,
      pagearr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pagecurr: 1,
      status: 'none',
      baseurl: 'https://ivanshavliuga.github.io/simples/audio_tm/'
    }
  },
  created () {
    for (let i = 1; i <= 10; i++) {
      this.files.push(i + '_tm.MP3')
    }
  },
  methods: {
    fullurl (id) {
      const ext = (this.folder < 2) ? ('_tm.MP3') : ('_tm.mp3')
      const rid = this.getID(id)
      return this.baseurl + this.folder + '/' + (rid + 1) + ext
    },
    playevent () {
      this.status = 'play'
    },
    selectfile (id) {
      let audiotag = document.querySelector('audio')
      audiotag.src = this.fullurl(id)
      this.id = id
    },
    getID (x) {
      return (this.pagecurr - 1) * 10 + x
    },
    updtpage (pg) {
      this.pagecurr = pg
    },
    updtfolder (fld) {
      this.folder = fld
    }
  }
}
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
  /* img:before {
  content: "?";
  position: absolute;
  background-color: #343423;
  display: block;
  top: -25%;
  z-index: 20;
  margin: 10px;
  padding-bottom: 7px;
  padding-left: 9px;
  color: yellow;
  font-size: 20px;
  font-weight: bold;
  width: 32px;
  height: 32px;
  border: 1px solid white;
  border-radius: 50%;
}
img:after {
  content: 'not found';
  position: absolute;
  top: -25%;
  display: block;
  z-index: 10;
  font-size: 9px;
  width: 50px;
  height: 50px;
  background-color: @bodybackground!important;
} */

  body{
    background: #606060;
  }
.playlist {
  width: 550px;
  padding: 0;
  margin: 15px auto;
  background-color: #fcfcfc;
  box-shadow: 1px 1px 3px 5px #aaa;
}
.playlist__item {
    background-color: #fcfcfc;
    position: relative;
    padding-left: 15px;
  }
  .playlist__number, .playlist__name {
    display: inline;
    font-size: 20px;
    font-weight: normal;
    line-height: 36px;
    margin: 0 10px;
  }
  .playlist__player {
    border-bottom: 7px double #999;
    padding: 15px 0;
    margin: 15px 0;
    background-color: #dfdfdf;
  }
  .playlist__number {
    color: red;
  }
  .playlist__panel {
    margin: 15px 25px;
  }
  .playlist__prev, .playlist__next {
    color: red;
    cursor: pointer;
    padding: 10px 5px;
    line-height: 40px;
    font-size: 16px;
  }
  .playlist__debug {
    color: grey;
    cursor: pointer;
    padding: 10px 5px;
    line-height: 30px;
    margin-left: 20px;
  }
  .playlist__counter {
    font-size: 21px;
  }
audio {
  display: block;
  width: 500px;
  height: 25px;
  padding: 5px 15px;
  margin: 2px auto;
  background-color: #dfdfdf;
}
  .itemactive {
    background-color: #42a912;
  }
</style>
