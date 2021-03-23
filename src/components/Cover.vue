<template>
  <div  class="cover">
    <img
    @click="onClick(album)"
      class="cover-img"
      :src="`http://localhost:3000/static/mp3/${encodeURIComponent(album)}/cover.jpg`"
      alt
    />
  </div>
</template>

<script>
export default {
  name: "Cover",
  props: {
    album: String
  },
  methods: {
    onClick: function(album) {
      console.log('click')
      this.$store.dispatch("getNextAlbumAction", album);
    }
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


<style scoped>
.cover-img {
   width: 12rem;
  height:  12rem;
  object-fit: cover;
}
.cover {
  display: inline-block;
  width:  12rem;
  height:  12rem;
}
</style>
