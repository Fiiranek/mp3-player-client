<template>
  <button
    @click="playSong(isSongPlaying,getCurrentSongUrl,files)"
    class="player-panel-btn"
    id="playBtn"
  >
    <i :class="isSongPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
  </button>
</template>

<script>
export default {
  name: "PlayButton",
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
  },
  methods: {
    playSong: function(isSongPlaying, getCurrentSongUrl, files) {
      console.log(files);
      if (getCurrentSongUrl == "") {
        const newUrl = encodeURIComponent(files[0].album + "/" + files[0].file);
        this.$store.dispatch("changeCurrentSongUrl", newUrl);
        document.getElementById("audio").load();
      }

      if (isSongPlaying) {
        document.getElementById("audio").pause();
      } else {
        document.getElementById("audio").play();
      }
      this.$store.dispatch("toggleIsSongPlaying");
    }
  }
};
</script>


<style scoped>
#playBtn {
  background: white;
  color: rgb(25, 25, 25);
}
#playBtn:hover {
  transition: 0.5s;
  background: #ddd;
}
</style>
