const getters = {
    getAlbums: function (state) {
        return state.albums;
    },
    getFiles: function (state) {
        return state.files;
    },
    getIsSongPlaying: function (state) {
        return state.isSongPlaying;
    },
    getCurrentSongUrl: function (state) {
        return state.currentSongUrl;
    },
    getCurrentSongIndex: function (state) {
        let currentSongIndex = -1;
        state.files.forEach((file, index) => {
            if (file.file == decodeURIComponent(state.currentSongUrl).split("/")[1]) currentSongIndex = index;
        })
        return currentSongIndex;
    },
}

export default getters