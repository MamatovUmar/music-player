<script setup lang="ts">

</script>

<template>
  <div class="songs">
    <div class="songs__playlist">
      <div class="playlist">
        <div
            class="playlist__cover"
            :style="`background: url(https://avatars.yandex.net/get-music-content/9838169/3609b1b3.a.27434098-1/m1000x1000)`"
        >
        </div>
        <div class="playlist__info">
          <div class="playlist__type">Playlist</div>
          <div class="playlist__title">Beautiful songs</div>
          <div class="playlist__tracks">Tracks: 20</div>
        </div>
      </div>
    </div>
    <div class="songs__list">
      <div class="song">
        <div>
          <div class="song__title">
            Shape of you
          </div>
          <div class="song__artist">
            Ed Sheerman
          </div>
        </div>
        <div class="song__play center">
          <i class="ri-play-fill"></i>
        </div>
      </div>

      <div class="song">
        <div>
          <div class="song__title">
            Shape of you
          </div>
          <div class="song__artist">
            Ed Sheerman
          </div>
        </div>
        <div class="song__play center">
          <i class="ri-play-fill"></i>
        </div>
      </div>

      <div class="song">
        <div>
          <div class="song__title">
            Shape of you
          </div>
          <div class="song__artist">
            Ed Sheerman
          </div>
        </div>
        <div class="song__play center">
          <i class="ri-play-fill"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.songs {
  padding: 0 20px;
  &__list {
    padding-top: 50px;
  }
}
.song {
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  &__title {
    font-size: 16px;
    margin-bottom: 5px;
  }
  &__artist {
    font-size: 13px;
    color: #62676E;
  }
  &__play {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 2px solid rgb(34 35 37);
    box-shadow: inset 0 0 4px 0 #1e2125d6, 0 0 9px 0 #0e0f1169;
    cursor: pointer;
    font-size: 20px;
  }
}
.playlist {
  display: flex;
  gap: 20px;
  &__cover {
    width: 200px;
    height: 150px;
    border-radius: 10px;
  }
  &__type {
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  &__title{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  &__tracks {
    font-size: 13px;
    color: #62676E;
    font-weight: 500;
  }
}
</style>