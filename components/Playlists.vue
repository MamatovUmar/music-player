<script setup lang="ts">
import { useMainStore } from "~/store";

const mainStore = useMainStore()
</script>

<template>
  <section v-if="mainStore.playlists" class="playlists">
    <div
        v-for="item of mainStore.playlists"
        :key="item.id"
        class="playlists__item"
    >
      <div
        class="playlists__cover"
        :style="`background-image: url(${item.cover})`"
        @click="mainStore.getPlaylist(item.id)"
      >
        <div class="playlists__hover center">
          <i class="ri-play-fill"></i>
        </div>
      </div>
      <div class="playlists__title">{{ item.title }}</div>
      <div class="playlists__tracks">Tracks: {{ item.tracksId.length }}</div>
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
    background-size: cover;
    background-position: center;
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
  @media (max-width: 757px) {
    border-right: none;
    width: 100%;
  }
}
</style>