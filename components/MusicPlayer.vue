<script setup lang="ts">

</script>

<template>
  <div class="player">
    <div class="player__controls">
      <div class="player__prev center">
        <i class="ri-rewind-fill"></i>
      </div>
      <div class="player__play center">
        <i class="ri-play-fill"></i>
      </div>
      <div class="player__next center">
        <i class="ri-speed-fill"></i>
      </div>
    </div>

    <div class="player__time">
      <div class="player__progress">
        <div class="player__bar"></div>
      </div>
      <div class="player__duration">
        <span>02:11</span>
        <span>04:23</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.player {
  display: flex;
  align-items: center;
  gap: 40px;
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
    width: 50%;
    background: #1487B8;
    height: 100%;
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
}
</style>