<script setup lang="ts">

import AppFooter from "~/components/AppFooter.vue";
import Playlists from "~/components/Playlists.vue";
import SongsList from "~/components/SongsList.vue";

import { useMainStore } from "~/store";

const mainStore = useMainStore()
const sidebarType = ref<string>('')

await Promise.all([
  mainStore.getAllPlaylist(),
  mainStore.getPlaylist(1)
])

const openDialog = (type: string) => {
  sidebarType.value = type
}
</script>

<template>
  <main class="home-page">
    <div :class="['content', 'container', sidebarType]">
      <i class="ri-close-fill content__close show-on-mobile" @click="sidebarType = ''"></i>
      <Playlists />
      <SongsList />
    </div>
    <AppFooter @openDialog="openDialog" />
  </main>
</template>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
.content {
  display: grid;
  grid-template-columns: 250px auto;
  height: 100%;
  padding: 100px 0 50px;
  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 25px;
    cursor: pointer;
  }
  @media (max-width: 757px) {
    display: block;
    padding: 50px 0 20px;
    position: fixed;
    top: 0;
    right: 0;
    background: rgb(52 57 62);
    width: 300px;
    transform: translateX(300px);
    visibility: hidden;
    transition: all 0.3s;
    &.playlist, &.songs {
      transform: translateX(0);
      visibility: visible;
    }
    &.playlist .songs {
      display: none;
    }
    &.songs .playlists {
      display: none;
    }
  }
}
</style>