export interface Playlist {
    id: number
    title: string
    trackCount: number
    cover: string
    tracksId: number[]
}

export interface Track {
    id: number
    title: string
    duration: number
    cover: string
    artist: string
    src: string
}

export interface PlaylistResponse {
    playlist: Playlist
    songs: Track[]
}