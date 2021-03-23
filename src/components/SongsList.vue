<template>
  <div class="songs-list">
    <div class="songs">
      <div class="songs-header">
        <img
          class="songs-header-img"
          :src="`http://localhost:3000/static/mp3/${encodeURIComponent(filesList[0].album)}/cover.jpg`"
          alt
        />
        <div class="songs-header-album">
          <h3>PLAYLIST</h3>
          <h1>{{filesList[0].album}}</h1>
        </div>
      </div>

      <table>
        <tr>
          <th>TITLE</th>
          <th>SIZE</th>
        </tr>
        <tr
          v-for="file in filesList"
          :key="file.id"
          :class="decodeURIComponent(getCurrentSongUrl) == file.album + '/' + file.file ? 'active song-row' : ' ' + ' song-row'"
        >
          <td>{{file.file.replace(".mp3","")}}</td>
          <td>{{(file.size/1048576).toFixed(2).toString()}} MB</td>
          <td>
            <button
              class="player-panel-btn player-panel-btn-side"
              @click="changeCurrentSongUrl(isSongPlaying,file,getCurrentSongUrl)"
            >
              <i
                :class="(decodeURIComponent(getCurrentSongUrl) == file.album + '/' + file.file && isSongPlaying) ? 'fas fa-pause'+' player-panel-btn-icon' : 'fas fa-play'+' player-panel-btn-icon' "
              ></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongsList",
  props: {
    album: String,
    filesList: Array
  },
  mounted() {
   
  },
  methods: {
    changeCurrentSongUrl(isSongPlaying, file, getCurrentSongUrl) {
      const newUrl = encodeURIComponent(file.album + "/" + file.file);
      if (isSongPlaying) {
        if (newUrl == getCurrentSongUrl) {
          console.log("STOP SAME");
          this.$store.dispatch("toggleIsSongPlaying");
          document.getElementById("audio").pause();
        } else {
          console.log("PLAY THIS");
          this.$store.dispatch("changeCurrentSongUrl", newUrl);
          document.getElementById("audio").load();
          document.getElementById("audio").play();
        }
      } else {
        if (newUrl == getCurrentSongUrl) {
          console.log("START SAME");
          this.$store.dispatch("toggleIsSongPlaying");
          document.getElementById("audio").play();
        } else {
          console.log("START DIFFERENT");
          this.$store.dispatch("toggleIsSongPlaying");
          this.$store.dispatch("changeCurrentSongUrl", newUrl);
          document.getElementById("audio").load();
          document.getElementById("audio").play();
        }
      }
    }
  },
  computed: {
    isSongPlaying() {
      return this.$store.getters.getIsSongPlaying;
    },
    getCurrentSongUrl() {
      return this.$store.getters.getCurrentSongUrl;
    },
    files() {
      return this.$store.getters.getFiles;
    }
  }
};
</script>


<style scoped>
.songs-list {
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}
h1 {
  font-size: 3rem;
}
.songs-header-album {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.songs-header-album h3 {
  font-weight: 300;
}
.songs {
  min-height: 85vh;
  color: white;
  background: linear-gradient(rgb(59, 59, 59), rgb(25, 25, 25));
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 300;
}
.songs-header {
  margin: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.songs-header-img {
  width: 15rem;
  height: 15rem;
  margin-right: 2rem;
}
.song-row {
  transition: 0.5s;
}
.song-row:hover {
  transition: 0.5s;
  background: rgb(68, 68, 68);
}
.active {
  background: rgb(68, 68, 68);
}
.player-panel-btn-icon {
  color: transparent;
}
.song-row:hover .player-panel-btn-icon {
  color: white;
}
table {
  margin: 0 2rem;
  border-collapse: collapse;
}
tr td,
th {
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 300;
}
td {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
