const mutations = {

    FIRST(state, data) {
        state.albums = data.albums
        state.files = data.files
    },

    NEXT(state, data) {
        state.files = data.files
    },

    TOGGLE_IS_SONG_PLAYING(state) {
        state.isSongPlaying = !state.isSongPlaying;
    },
    CHANGE_CURRENT_SONG_URL(state, songUrl) {
        state.currentSongUrl = songUrl;
    }
}

export default mutations