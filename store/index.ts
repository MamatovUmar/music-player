import { defineStore } from 'pinia'
import { Playlist, Track } from "~/types/track";

export const useMainStore = defineStore('main', {
    state: (): MainStoreState => ({
        playlists: null,
        tracks: null
    }),

    actions: {
        async getAllPlaylist() {
            try {
                const { data } = await useFetch<Playlist[]>('/api/playlists')
                this.playlists = data.value
            } catch (e) {
                console.log(e)
            }
        },
        async getPlaylist(id: number) {
            try {
                const { data } = await useFetch<Track[]>(`/api/playlist/${id}`)
                this.tracks = data.value
            } catch (e) {
                console.log(e)
            }
        }
    }
})

export interface MainStoreState {
    playlists: Playlist[] | null
    tracks: Track[] | null
}