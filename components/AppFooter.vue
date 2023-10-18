<script setup lang="ts">
import MusicPlayer from "~/components/MusicPlayer.vue";
</script>

<template>
<div class="container">
  <div class="player-container">
    <div class="track">
      <div class="track__cover" :style="`background: url(https://avatars.yandex.net/get-music-content/9838169/3609b1b3.a.27434098-1/m1000x1000)`"></div>
      <div class="track__info">
        <div class="track__title">Shape of you</div>
        <div class="track__artist">Ed Sheeran</div>
      </div>
    </div>

    <MusicPlayer />

    <div class="settings">
      <div class="settings__item center">
        <i class="ri-share-line"></i>
      </div>
      <div class="settings__item center">
        <i class="ri-volume-up-line"></i>
      </div>
    </div>
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
.player-container {
  box-sizing: border-box;
  height: 135px;
  border-top: 3px solid #111315;
  display: grid;
  grid-template-columns: 240px auto 100px;
  align-items: center;
  gap: 40px;
}
.track {
  display: flex;
  align-items: center;
  gap: 20px;
  &__cover {
    height: 70px;
    width: 70px;
    border-radius: 70px;
    box-shadow: 0 0 9px 5px #0E0F11;
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
}
</style>