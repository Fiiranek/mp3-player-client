<template>
  <div id="app">
    <div id="content">
      <div class="covers">
        <cover v-for="album in albums" :key="album.id" :album="album"></cover>
      </div>
      <songs-list :files-list="files"></songs-list>
    </div>
    <player-panel></player-panel>
  </div>
</template>
<script>
import Cover from "./components/Cover.vue";
import SongsList from "./components/SongsList.vue";
import PlayerPanel from "./components/PlayerPanel.vue";
import "./assets/css/main.css";
export default {
  name: "App",
  components: {
    Cover,
    SongsList,
    PlayerPanel
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getAlbumAction");
  },
  computed: {
    albums() {
      return this.$store.getters.getAlbums;
    },
    files() {
      return this.$store.getters.getFiles;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");
body {
  margin: 0;
  font-family: "Nunito", sans-serif;
}
::-webkit-scrollbar {
 width: 13px;
 height: 13px;
}
::-webkit-scrollbar-thumb {
 background: #cccccc;
 border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
 background: #dddddd;
}
::-webkit-scrollbar-track{
background: linear-gradient(rgb(59, 59, 59), rgb(25, 25, 25));
 border-radius: 10px;
 border-radius: 0px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: rgb(173, 173, 173);
  display: flex;
  flex-direction: column;
}
#content {
  width: 100%;
  display: flex;
  height: 85vh;
}
.covers {
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
.flex {
  display: flex;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-space-between {
  justify-content: space-between;
}
.justify-content-space-around {
  justify-content: space-around;
}
.align-items-center {
  align-items: center;
}
.flex-direction-column {
  flex-direction: column;
}
</style>
