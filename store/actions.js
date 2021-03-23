import axios from 'axios'

const actions = {
    getAlbumAction({ commit }) {
        axios.post('http://localhost:3000/first')
            .then(response => {
                commit('FIRST', response.data)
            })
    },
    getNextAlbumAction({ commit }, album) {
        const params = new URLSearchParams();
        params.append('album', album);
        axios.post('http://localhost:3000/next', params)
            .then(response => {
                console.log(response.data)
                commit('NEXT', response.data)
            })
    },
    toggleIsSongPlaying({ commit }) {
        commit('TOGGLE_IS_SONG_PLAYING')
    },
    changeCurrentSongUrl({ commit }, url) {
        console.log(url)
        commit('CHANGE_CURRENT_SONG_URL', url);
    }

}

export default actions