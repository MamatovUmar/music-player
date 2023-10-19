import { defineStore } from 'pinia'
import { Playlist, PlaylistResponse, Track } from "~/types/track";
import { useFetch } from "#app";

export const useMainStore = defineStore('main', {
    state: (): MainStoreState => ({
        playlists: null,
        playlist: null,
        tracks: null,
        currentTrack: null
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
                const { data } = await useFetch<PlaylistResponse>(`/api/playlist/${id}`)
                if (data.value) {
                    this.tracks = data.value.songs
                    this.playlist = data.value.playlist
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
})

export interface MainStoreState {
    playlists: Playlist[] | null
    playlist: Playlist | null
    tracks: Track[] | null
    currentTrack: Track | null
}