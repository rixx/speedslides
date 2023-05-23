<script setup>
import { watch } from 'vue'
const splits = {
  "intro": {"name": "Intro", "icon": "mdi-home", "time": null, "splitDiff": -5.4},
  "definition": {"name": "Speedrunning", "icon": "mdi-run", "time": null},
  "rules": {"name": "Rules", "icon": "mdi-run", "time": null},
  "similarities": {
    "name": "Similarities",
    "icon": "mdi-run",
    "time": null,
    "subsplits": {
      "open": {"name": "Work in public", "icon": "mdi-run", "time": null},
      "experts": {"name": "Don't ask to ask", "icon": "mdi-run", "time": null},
      "diverse": {"name": "Diverse", "icon": "mdi-run", "time": null},
      "labbers": {"name": "Lab rats", "icon": "mdi-run", "time": null},
      "organisers": {"name": "Tournaments", "icon": "mdi-run", "time": null},
      "governance": {"name": "Governance", "icon": "mdi-run", "time": null},
      "hype": {"name": "Hype", "icon": "mdi-run", "time": null},
    }
  },
  "differences": { "name": "Differences", "icon": "mdi-run", "time": null },
  "practice": { "name": "Deliberate Practice", "icon": "mdi-run", "time": null,
    "subsplits": {
      "talent": { "name": "Talent and Intelligence", "icon": "mdi-run", "time": null },
      "practice": { "name": "Deliberate Practice", "icon": "mdi-run", "time": null },
      "representation": { "name": "Mental Representations", "icon": "mdi-run", "time": null },
    }
  },
  "action": { "name": "Call to Action", "icon": "mdi-run", "time": null,
    "subsplits": {
      "fluency": { "name": "Fluency", "icon": "mdi-run", "time": null },
      "tools": { "name": "Tools", "icon": "mdi-run", "time": null },
      "spaced": { "name": "Spaced Repetition", "icon": "mdi-run", "time": null },
      "feedback": { "name": "Feedback", "icon": "mdi-run", "time": null },
    }
  },
  "outro": { "name": "Outro", "icon": "mdi-run", "time": null },
}
let currentSplit = $ref("intro")
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
  // Do not trigger if just part of the slide has advanced
  if ($slidev.nav.clicks > 0) return
  if ($slidev.nav.route.meta.split == "reset") {
    startTime = Date.now()
    timer = 0
    for (const split of Object.values(splits)) {
      if (split.subsplits) {
        for (const subSplit of Object.values(split.subsplits)) {
          subSplit.time = null
        }
      } else {
        split.time = null
      }
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
    // "." indicates a sub-split
    if ($slidev.nav.route.meta.split.includes(".")) {
      const [split, subSplit] = $slidev.nav.route.meta.split.split(".")
      const splittime = Date.now() - startTime
      splits[split].subsplits[subSplit].time = splittime
      // if this was the last sub-split, set the parent split time
      if (Object.values(splits[split].subsplits).every(subSplit => subSplit.time != null)) {
        splits[split].time = splittime
        currentSplit = Object.keys(splits).find(split => splits[split].time == null)
        console.log("was the last split, updating currentSplit")
        console.log(currentSplit)
      } else {
        // currentSplit is the next sub-split in line
        currentSplit = `${split}.${Object.keys(splits[split].subsplits).find(subSplit => splits[split].subsplits[subSplit].time == null)}`
      }
    } else {
      splits[$slidev.nav.route.meta.split].time = Date.now() - startTime
      currentSplit = Object.keys(splits).find(split => splits[split].time == null)
    }
    if (!currentSplit) {
      timerMode = "stop"
      // in 10ms, set last split to the end time, otherwise we have <10s difference
      setTimeout(() => {
        splits[$slidev.nav.route.meta.split].time = timer
      }, 10)
    }
  }
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
      <template v-for="(split, code, index) in splits" :key="split.name">
        <tr class="split">
          <td>
          </td>
          <td class="splitname">
            {{ split.name }}
          </td>
          <td class="timediff">
            <span v-if="split.time">
                {{ split.splitDiff }}
            </span>
          </td>
          <td class="timetotal">
            <span v-if="split.time" class="mdi mdi-check">
                {{ formatTimeFull(split.time) }}
            </span>
            <span v-else>-</span>
          </td>
        </tr>
          <tr v-if="split.subsplits && currentSplit && currentSplit.startsWith(code)" v-for="subsplit in Object.values(split.subsplits)" :key="subsplit.name" class="subsplit split">
            <td>
              <span class="mdi mdi-24px mdi-{{ subsplit.icon }}"></span>
            </td>
            <td class="splitname">
              {{ subsplit.name }}
            </td>
            <td class="timediff">
              <span v-if="subsplit.time">
                  {{ subsplit.splitDiff }}
              </span>
            </td>
            <td class="timetotal">
              <span v-if="subsplit.time" class="mdi mdi-check">
                  {{ formatTimeFull(subsplit.time) }}
              </span>
              <span v-else>-</span>
            </td>
        </tr>
      </template>
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
  height: 100%;
  z-index: 1000;
  color: white;
  background-color: rgba(0,0,0,0.8);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}
#livesplit.hidden {
  visibility: hidden;
}
#livesplittitle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: linear-gradient(rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0) 100%);
  font-size: 0.8em;
  #title-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
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
  font-size: 0.8em;
  color: white;
  text-shadow: 2px 2px 2px rgba(0,0,0,.5);
  margin-bottom: 20px;
  padding-left: 10px;
}
#splitlist .timediff, #splitlist .timetotal {
  text-align: right;
  padding-right: 10px;
  font-family: "timer";
  font-weight: 100;
}
.split .splitname {
  padding-left: 8px
}
.subsplit .splitname {
  padding-left: 24px
}
.split:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0.08);
}
#timer {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  font-weight: bold;
  text-align: right;
  background: linear-gradient(180deg, rgba(128,255,162,1) 0%, rgba(0,163,44,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "timer";
  font-weight: 100;
  margin-right: 8px;
  margin-top: auto;
}
#timerbig {
  font-size: 2.7em;
}
#timersmall {
  font-size: 1.1em;
}
.slidev-page {
  filter: brightness(0.1) !important;
}
</style>
