const axios = require('axios');
const { cacheResult } = require('../services/redis');
const FormData = require('form-data');


const SPOTIFY_AUTH_HASH = process.env.SPOTIFY_AUTH_HASH;
const TOP_PLAYLIST_ID = "37i9dQZEVXbMDoHDwVN2tF";
const baseTokenURL = "https://accounts.spotify.com/api/token";
const baseGetURL = "https://api.spotify.com/v1/playlists/";
const songParams = "market=ES&fields=items(track(artists(name),name,album(images,name)))&limit=50&offset=5";
const fetchPopularSongs = async (cacheKey) => {
    try {
        const {access_token, token_type} = await getAccessToken();
        console.log(access_token);
        const URL = `${baseGetURL}${TOP_PLAYLIST_ID}/tracks?${songParams}`;
        const getSongsRequest = await axios.get(URL, {
            headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json",
            "Authorization" : `${token_type} ${access_token}`
        }})
        const songData = getSongsRequest.data.items.map((song) => {
            return {
                albumName: song.track.album.name,
                img_url: song.track.album.images[0].url,
                title : song.track.name,
                songArtist: song.track.artists[0].name            
            }
        })
        cacheResult(cacheKey,'music',songData);
        return songData;
    } catch (e) {
        console.log("Error fetching songs: ", e);
        throw e;
    }
}

const getAccessToken = async() => {
    try{
        const apiTokenRequest = await axios({
            method: 'post',
            url: baseTokenURL,
            headers: {
                "Authorization": `Basic ${SPOTIFY_AUTH_HASH}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            params: {
                grant_type: 'client_credentials'
            },
            json: true,
        })
        return apiTokenRequest.data;
    }catch(e){
        console.log("Error fetching songs: ", e);
        throw e;
    }
}

module.exports = {
    fetchPopularSongs
};