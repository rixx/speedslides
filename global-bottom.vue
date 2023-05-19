<script setup>
import { watch } from 'vue'
const splits = {
  "intro": {"name": "Intro", "icon": "mdi-home", "time": null, "splitDiff": -5.4},
  "definition": {"name": "Speedrunning", "icon": "mdi-run", "time": null},
}
const formatTimeMs = (time) => {
  const date = new Date(time)
  const milliseconds = date.getUTCMilliseconds()
  return milliseconds.toString().padStart(2, "0").slice(0, 2)
}
const formatTime = (time) => {
  if (time == null) return "00:00:00"
  const date = new Date(time)
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const seconds = date.getUTCSeconds()
  // Return shortest possible time, with 2 digits for milliseconds
  if (hours > 0) return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  if (minutes > 0) return `${minutes}:${seconds.toString().padStart(2, "0").slice(0, 2)}`
  return seconds
}
const formatTimeFull = (time) => {
  if (time == null) return "00:00:00"
  return `${formatTime(time)}.${formatTimeMs(time)}`
  const milliseconds = date.getUTCMilliseconds()

}
let startTime = null
let timer = $ref(0)
let timerMode = "stop"
let timerState = $ref("hidden")
setInterval(() => {
  if (timerMode == "stop") return
  timer = Date.now() - startTime
}, 10)
watch($slidev.nav, () => {
  console.log($slidev.nav.route.meta.split)
  if ($slidev.nav.route.meta.split == "reset") {
    startTime = Date.now()
    timer = 0
    for (const split of Object.values(splits)) {
      split.time = null
    }
    timerMode = "stop"
  } else if ($slidev.nav.route.meta.split == "stop") {
    timerMode = "stop"
  } else if ($slidev.nav.route.meta.split == "show") {
    timerState = "visible"
    startTime = Date.now()
  } else if ($slidev.nav.route.meta.split == "start") {
    timerState = "visible"
    timerMode = "start"
    startTime = Date.now()
  } else if ($slidev.nav.route.meta.split) {
    splits[$slidev.nav.route.meta.split].time = Date.now() - startTime
  }
  console.log(timerState)
})
</script>
<template>
  <div id="livesplit" :class="timerState">
    <div id="livesplittitle">
      <div id="title-left">
        <img src="./images/icon.png">
      </div>
      <div id="title-right">
        <div>DjangoCon Europe Keynote</div>
        <div>100% 2023 No Major Glitches</div>
      </div>
    </div>
    <table id="splitlist">
      <tr v-for="split in Object.values(splits)" :key="split.name" class="split">
        <td>
        </td>
        <td>
          {{ split.name }}
        </td>
        <td>
          <span v-if="split.time">
              {{ split.splitDiff }}
          </span>
        </td>
        <td>
          <span v-if="split.time" class="mdi mdi-check">
              {{ formatTimeFull(split.time) }}
          </span>
          <span v-else>-</span>
        </td>
      </tr>
    </table>
    <div id="timer">
      <span id="timerbig">{{ formatTime(timer) }}</span><span id="timersmall">.{{ formatTimeMs(timer) }}</span>
    </div>
  </div>
</template>
<style scoped>
@font-face {
 font-family:timer;
 font-display:swap;
 src:url(/font.woff)
}
#livesplit {
  position: fixed;
  bottom:0;
  right: 0;
  z-index: 1000;
  color: white;
  background-color: rgba(0,0,0,0.8);
  font-family: sans-serif;
}
#livesplit.hidden {
  visibility: hidden;
}
#timer {
  font-size: 1.7em;
  font-weight: bold;
  text-align: right;
  background: linear-gradient(180deg, rgba(128,255,162,1) 0%, rgba(0,163,44,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 300px;
}
#livesplittitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: linear-gradient(rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0) 100%);
  #title-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }
  #title-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
#splitlist {
  width: 100%;
  font-size: 1.2em;
  color: white;
  text-shadow: 2px 2px 2px rgba(0,0,0,.5);
  margin-bottom: 20px;
  padding-left: 10px;
}
.split:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0.08);
}
#timer {
  font-family: "timer";
  font-weight: normal;
}
#timerbig {
  font-size: 2em;
}
#timersmall {
  font-size: 1.2em;
}
.slidev-page {
  filter: brightness(0.1) !important;
}
</style>
