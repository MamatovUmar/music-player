<script setup lang="ts">
import { useMainStore } from "~/store";

const mainStore = useMainStore()
</script>

<template>
  <div class="songs">
    <div class="songs__playlist">
      <div v-if="mainStore.playlist" class="playlist">
        <div
          class="playlist__cover"
          :style="`background-image: url(${mainStore.playlist.cover})`"
        >
        </div>
        <div class="playlist__info">
          <div class="playlist__type">Playlist</div>
          <div class="playlist__title">{{ mainStore.playlist.title }}</div>
          <div class="playlist__tracks">Tracks: {{ mainStore.playlist.tracksId.length }}</div>
        </div>
      </div>
    </div>

    <div v-if="mainStore.tracks" class="songs__list">
      <div
        v-for="track of mainStore.tracks"
        :key="track.id"
        class="song"
      >
        <div>
          <div class="song__title"> {{ track.title }} </div>
          <div class="song__artist"> {{ track.artist }} </div>
        </div>
        <div
          class="song__play center"
          @click="mainStore.currentTrack = track"
        >
          <i v-if="mainStore.currentTrack?.id === track.id" class="ri-pause-fill"></i>
          <i v-else class="ri-play-fill"></i>
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
    transition: 0.3s;
  }
}
.playlist {
  display: flex;
  gap: 20px;
  &__cover {
    width: 200px;
    height: 150px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
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
  @media (max-width: 757px) {
    gap: 10px;
    &__cover {
      width: 80px;
      height: 65px;
      border-radius: 7px;
    }
    &__type {
      font-size: 12px;
    }
    &__title{
      font-size: 20px;
      margin-bottom: 5px;
    }
    &__tracks {
      font-size: 12px;
    }
  }
}
</style>