import { playlists } from "~/constants/songs";

export default defineEventHandler(async ({ node }) => {
    console.log(node.req)
    return playlists
})
