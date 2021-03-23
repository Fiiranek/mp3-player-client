<template>
  <div class="player-panel">
    <audio id="audio" controls>
      <source
        :src="'http://localhost:3000/static/mp3/'+getCurrentSongUrl"
        id="audio_src"
        type="audio/mp3"
      />
    </audio>
    <div class="player-panel-leading">
      <img src class="player-panel-leading-img" alt />
      <span
        class="player-panel-leading-span"
      >{{decodeURIComponent(getCurrentSongUrl).replace(".mp3","")}}</span>
    </div>
    <div class="player-panel-btns">
      <button  @click="changeSong('prev',getCurrentSongIndex,files)" class="player-panel-btn" id="prevBtn">
        <i class="fas fa-step-backward"></i>
      </button>
      <play-button></play-button>
      <button @click="changeSong('next',getCurrentSongIndex,files)" class="player-panel-btn" id="nextBtn">
        <i class="fas fa-step-forward"></i>
      </button>
    </div>
  </div>
</template>

<script>
import PlayButton from "./PlayButton";
export default {
  components: {
    PlayButton
  },
  name: "PlayerPanel",
  computed: {
    isSongPlaying() {
      return this.$store.getters.getIsSongPlaying;
    },
    getCurrentSongUrl() {
      return this.$store.getters.getCurrentSongUrl;
    },
     files() {
      return this.$store.getters.getFiles;
    },
    getCurrentSongIndex(){
      return this.$store.getters.getCurrentSongIndex;
    }
  },
  methods: {
    playSong: function(isSongPlaying) {
      if (isSongPlaying) {
        document.getElementById("audio").pause();
      } else {
        document.getElementById("audio").play();
      }
      this.$store.dispatch("toggleIsSongPlaying");
    },
    changeSong: function(direction,getCurrentSongIndex,files) {
      if (direction == "next") {
        if(getCurrentSongIndex < files.length - 1){
          const nextFile = files[getCurrentSongIndex+1];
          const newUrl = encodeURIComponent(nextFile.album + "/" + nextFile.file);
          this.$store.dispatch("changeCurrentSongUrl", newUrl);
          document.getElementById("audio").load();
          document.getElementById("audio").play();
        }
      } else if (direction == "prev") {
        if(getCurrentSongIndex > 0){
          const prevFile = files[getCurrentSongIndex- 1];
          const newUrl = encodeURIComponent(prevFile.album + "/" + prevFile.file);
          this.$store.dispatch("changeCurrentSongUrl", newUrl);
          document.getElementById("audio").load();
          document.getElementById("audio").play();
        }
      }
    }
  }
};
</script>


<style scoped>
button:focus {
  outline: none;
}
.player-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(25, 25, 25);
  height: 15vh;
  color: white;
}
.player-panel-btns {
  display: flex;
  justify-content: center;
  align-items: center;
}

#prevBtn,
#nextBtn {
  color: white;
}
#prevBtn:hover,
#nextBtn:hover {
  background: rgb(59, 59, 59);
  color: #ddd;
  transition: 0.5s;
}
audio {
  display: none;
}
</style>
