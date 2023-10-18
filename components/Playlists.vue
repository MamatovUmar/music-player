<script setup lang="ts">

</script>

<template>
  <section class="playlists">
    <div class="playlists__item">
      <div
        class="playlists__cover"
        :style="`background: url(https://avatars.yandex.net/get-music-content/9838169/3609b1b3.a.27434098-1/m1000x1000)`"
      >
        <div class="playlists__hover center">
          <i class="ri-play-fill"></i>
        </div>
      </div>
      <div class="playlists__title">Beautiful songs</div>
      <div class="playlists__tracks">Tracks: 20</div>
    </div>

    <div class="playlists__item">
      <div
          class="playlists__cover"
          :style="`background: url(https://avatars.yandex.net/get-music-content/9838169/3609b1b3.a.27434098-1/m1000x1000)`"
      >
        <div class="playlists__hover center">
          <i class="ri-play-fill"></i>
        </div>
      </div>
      <div class="playlists__title">Beautiful songs</div>
      <div class="playlists__tracks">Tracks: 20</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.playlists {
  width: 250px;
  padding: 0 20px;
  box-sizing: border-box;
  border-right: 1px solid rgb(22 24 27 / 55%);
  &__item{
    width: 100%;
    margin-bottom: 20px;
  }
  &__cover {
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
  }
  &__title {
    font-size: 16px;
    margin-top: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__tracks {
    font-size: 13px;
    margin-top: 5px;
  }
  &__hover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    font-size: 50px;
    transition: 0.3s;
    opacity: 0;
    &:hover, &.active {
      opacity: 1;
    }
  }
}
</style>