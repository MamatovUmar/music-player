import { playlists, tracks } from "~/constants/songs";
import { Playlist, Track } from "~/types/track";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const playlist = playlists.find(el => el.id === Number(id)) as Playlist

    return tracks.filter(el => playlist.tracksId.includes(el.id))
})
