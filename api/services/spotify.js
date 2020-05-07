const axios = require('axios');
const { cacheResult } = require('../services/redis');
const FormData = require('form-data');

const SPOTIFY_API_KEY = process.env.SPOTIFY_API_KEY;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_AUTH_HASH = process.env.SPOTIFY_AUTH_HASH;
const TOP_PLAYLIST_ID = "37i9dQZEVXbMDoHDwVN2tF";
const baseTokenURL = "https://accounts.spotify.com/api/token";
const baseGetURL = "https://api.spotify.com/v1/playlists/";
const songParams = "market=ES&fields=items(added_by.id%2Ctrack(name%2Chref%2Calbum(name%2Chref)))&limit=50&offset=5";

const fetchPopularSongs = async (cacheKey) => {
    try {
        const {access_token, token_type} = await getAccessToken();
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
                title : song.track.name,
                songLink : song.track.href
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