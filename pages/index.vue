<script setup lang="ts">

import AppFooter from "~/components/AppFooter.vue";
import Playlists from "~/components/Playlists.vue";
import SongsList from "~/components/SongsList.vue";
</script>

<template>
  <main class="home-page">
    <div class="content container">
      <Playlists />
      <SongsList />
    </div>
    <AppFooter />
  </main>
</template>

<style scoped lang="scss">
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
}
</style>