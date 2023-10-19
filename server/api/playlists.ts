import { playlists } from "~/constants/songs";

export default defineEventHandler(async ({ node }) => {
    return playlists
})
