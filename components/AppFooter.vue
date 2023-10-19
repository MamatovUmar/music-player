<script setup lang="ts">
import MusicPlayer from "~/components/MusicPlayer.vue";
import { useMainStore } from "~/store";

const emit = defineEmits<{
  (e: 'openDialog', text: string): void
}>()

const mainStore = useMainStore()
</script>

<template>
<div class="container">
  <div class="player-container">
    <div class="track">
      <div
        v-if="mainStore.currentTrack"
        class="track__cover"
        :style="`background-image: url(${mainStore.currentTrack?.cover})`"
      ></div>
      <div class="track__info">
        <div class="track__title">{{ mainStore.currentTrack?.title }}</div>
        <div class="track__artist">{{ mainStore.currentTrack?.artist }}</div>
      </div>
    </div>

    <MusicPlayer @openDialog="(e) => emit('openDialog', e)" />
  </div>
</div>
</template>

<style scoped lang="scss">
.player-container {
  box-sizing: border-box;
  height: 135px;
  border-top: 3px solid #111315;
  display: grid;
  grid-template-columns: 240px auto 100px;
  align-items: center;
  gap: 40px;
  @media (max-width: 992px) {
    gap: 20px;
    grid-template-columns: 200px auto 80px;
  }
  @media (max-width: 757px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    border-top: none;
  }
}
.track {
  display: flex;
  align-items: center;
  gap: 20px;
  &__cover {
    height: 70px;
    width: 70px;
    min-width: 70px;
    border-radius: 70px;
    box-shadow: 0 0 9px 5px #0E0F11;
    background-size: cover;
    background-position: center;
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
    color: #62676E;
  }
  &__artist {
    font-size: 13px;
    color: #555A60;
  }
  @media (max-width: 992px) {
    gap: 10px;
    &__title {
      font-size: 16px;
    }
    &__artist {
      font-size: 10px
    }
    &__cover {
      height: 50px;
      width: 50px;
      min-width: 50px;
    }
  }

  @media (max-width: 757px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
    &__cover {
      width: 200px;
      height: 200px;
      border-radius: 200px;
      margin-bottom: 10px;
    }
    &__title {
      font-size: 20px;
    }
    &__artist {
      font-size: 14px;
    }
  }
}
</style>