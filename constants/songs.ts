import { Playlist, Track } from "~/types/track";

export const playlists: Playlist[] = [
    {
        id: 1,
        title: 'I like',
        trackCount: 10,
        cover: 'https://music.yandex.ru/blocks/playlist-cover/playlist-cover_like.png',
        tracksId: [37867862, 106596775, 108462121, 95851985]
    },
    {
        id: 2,
        title: 'Labyrinth',
        trackCount: 10,
        cover: 'https://avatars.yandex.net/get-music-content/9838169/3609b1b3.a.27434098-1/200x200',
        tracksId: [106596775, 108462121, 95851985]
    }
]

export const tracks: Track[] = [
    {
        id: 37867862,
        title: 'Bilmaysan yor',
        duration: 169770,
        cover: 'https://avatars.yandex.net/get-music-content/108289/a4120099.a.4811904-1/200x200',
        artist: 'Jaloliddin Ahmadaliyev',
        src: 'https://uzhits.net/uploads/files/2022-11/jaloliddin-ahmadaliyev-bilmaysan-yor_(uzhits.net).mp3',
    },
    {
        id: 106596775,
        title: 'Oshiq yurak',
        duration: 197790,
        cover: 'https://avatars.yandex.net/get-music-content/5413882/e9a74a88.a.23256599-1/200x200',
        artist: 'Alisher Uzoqov',
        src: 'https://uzhits.net/uploads/files/2015-01/alisher-uzoqov-oshiq-yurak_(uzhits.net).mp3',
    },
    {
        id: 108462121,
        title: 'Daydi',
        duration: 207500,
        cover: 'https://avatars.yandex.net/get-music-content/7548376/1d2edc7c.a.23927782-1/200x200',
        artist: 'Dilnoz',
        src: 'https://uzhits.net/uploads/files/2022-11/dilnoz-daydi_(uzhits.net).mp3',
    },
    {
        id: 95851985,
        title: 'Azizam',
        duration: 157500,
        cover: 'https://avatars.yandex.net/get-music-content/5485872/4640e788.a.19579931-1/200x200',
        artist: 'Oybek Ahmedov',
        src: 'https://uzhits.net/musiccc/dl2/2021/2021-11/oybek-ahmedov-azizam-cover_(uzhits.net).mp3',
    }
]