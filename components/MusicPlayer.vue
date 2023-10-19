<script setup lang="ts">
import { useMainStore } from "~/store";
import { computed, ref, watch } from "#imports";

const emit = defineEmits<{
  (e: 'openDialog', text: string): void
}>()

const mainStore = useMainStore()

const audio = ref<HTMLAudioElement | null>(null)
const currentTime = ref<number>(0)
const duration = ref<number>(0)
const isPlaying = ref<boolean>(false)
const isSoundEnabled = ref<boolean>(true)
const repeatAll = ref<boolean>(true)

const currentTrackIndex = computed(() => {
  return mainStore.tracks?.findIndex(el => el.id === mainStore.currentTrack?.id) || 0
})

const currentTimePercentage = computed(() => {
  if (!currentTime.value || !duration.value) return 0
  return Math.ceil(currentTime.value * 100 / duration.value)
})

watch(() => mainStore.currentTrack, async (val) => {
  if (val) {
    await nextTick()
    await audio.value?.play()
    isPlaying.value = true
  }
})

const play = () => {
  if(!mainStore.currentTrack) return

  isPlaying.value ? audio.value?.pause() : audio.value?.play()
  isPlaying.value = !isPlaying.value
}

const previous = () => {
  if(!mainStore.currentTrack || !mainStore.tracks) return

  let prevIndex = currentTrackIndex.value - 1
  prevIndex = prevIndex < 0 ? mainStore.tracks.length - 1 : prevIndex

  mainStore.currentTrack = mainStore.tracks[prevIndex]
  audio.value?.load();
  audio.value?.play()
}

const next = () => {
  if(!mainStore.currentTrack || !mainStore.tracks) return

  let nextIndex = currentTrackIndex.value + 1
  nextIndex = nextIndex >= mainStore.tracks.length ? 0 : nextIndex

  mainStore.currentTrack = mainStore.tracks[nextIndex]
  audio.value?.load();
  audio.value?.play()
}

const end = () => {
  if (repeatAll.value) {
    next()
  } else {
    audio.value?.play()
  }
}

const toggleSound = () => {
  isSoundEnabled.value = !isSoundEnabled.value;
  if (audio.value) audio.value.muted = !isSoundEnabled.value;
};

const seek = (event: MouseEvent) => {
  if (!audio.value) return
  const { left, width } = (event.target as HTMLElement).getBoundingClientRect();
  const clickX = event.clientX - left;
  const percentComplete = clickX / width;
  audio.value.currentTime = percentComplete * duration.value;
}

const updateProgress = () => {
  currentTime.value = audio.value?.currentTime ?? 0;
  duration.value = audio.value?.duration ?? 0;
}

const formatTime = (value: number) => {
  if (!value || isNaN(value)) return '00:00';
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = Math.floor(value % 60);
  return `${hours ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
</script>

<template>
  <div class="player">
    <audio
      class="player__audio"
      ref="audio"
      :src="mainStore.currentTrack?.src"
      @timeupdate="updateProgress"
      @ended="end"
    ></audio>

    <div class="player__controls">
      <div class="player__prev center" @click="previous">
        <i class="ri-rewind-fill"></i>
      </div>
      <div class="player__play center" @click="play">
        <i v-if="isPlaying" class="ri-pause-fill"></i>
        <i v-else class="ri-play-fill"></i>
      </div>
      <div class="player__next center" @click="next">
        <i class="ri-speed-fill"></i>
      </div>
    </div>

    <div class="player__time">
      <div class="player__progress" @click="seek">
        <div class="player__bar" :style="`width: ${currentTimePercentage}%`"></div>
      </div>
      <div class="player__duration">
        <span>{{ formatTime(currentTime) }}</span>
        <span>{{ formatTime(duration) }}</span>
      </div>
    </div>
  </div>

  <div class="settings">
    <div class="settings__item center" @click="emit('openDialog', 'playlist')">
      <i class="ri-play-list-fill"></i>
    </div>
    <div class="settings__item center" @click="emit('openDialog', 'songs')">
      <i class="ri-order-play-fill"></i>
    </div>
    <div class="settings__item center" @click="repeatAll = !repeatAll">
      <i v-if="repeatAll" class="ri-repeat-line"></i>
      <i v-else class="ri-repeat-one-line"></i>
    </div>
    <div class="settings__item center" @click="toggleSound">
      <i v-if="isSoundEnabled" class="ri-volume-up-line"></i>
      <i v-else class="ri-volume-mute-line"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
.settings {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;
  &__item {
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 30px;
  }
}
.player {
  display: flex;
  align-items: center;
  gap: 40px;
  &__audio {
    visibility: hidden;
  }
  &__time {
    width: 100%;
    margin-top: 20px;
  }
  &__duration {
    display: flex;
    justify-content: space-between;
    color: #62676E;
    font-size: 12px;
  }
  &__progress {
    background: linear-gradient(87deg, #0E0F11, #181c1e);
    width: 100%;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
    cursor: pointer;
  }
  &__bar {
    width: 0;
    background: #1487B8;
    border-radius: 4px;
    height: 100%;
    transition: width 0.5s;
  }
  &__controls {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
  }
  &__prev, &__next {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: #1D2024;
    border: 2px solid rgb(34 35 37 / 74%);
    box-shadow: inset 0 0 4px 0 #1e2125, 0 0 9px 0 #0E0F11;
    cursor: pointer;
  }
  &__play {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    font-size: 24px;
    border: 3px solid #1CA3D7;
    box-shadow: 0 0 9px 0 #0E0F11;
    cursor: pointer;
    background: linear-gradient(144deg, #0C6A99, #1998CB);
  }

  @media (max-width: 757px) {
    flex-direction: column-reverse;
    width: 100%;
    max-width: 250px;
    margin-bottom: 20px;
  }
}
</style>