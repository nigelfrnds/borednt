const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
}

const getRandomValueFromArray = (list) => {
    const randomIndex = getRandomIndex(list.length);
    const randomValue = list[randomIndex];

    return randomValue;
}

const truncateText = (length, text) => {
    if (text.length <= length) return text;

    const shortened = text.substr(0, length-1);
    const truncated = shortened.substr(0, shortened.lastIndexOf(" "));
    const result = truncated + "...";

    return result;
}

const buildResponse = (dataType, list) => {
    const randomValue = getRandomValueFromArray(list);
    let response = {};

    switch(dataType) {
        case 'movies':
            response = buildMovieResponse(randomValue);
            break;
        case 'tv-shows':
            response = buildTvShowResponse(randomValue);
            break;
        case 'videos':
            response = buildVideoResponse(randomValue);
            break;
        case 'games': 
            response = buildGameResponse(randomValue);
            break;
        default:
            break;
    }

    return response;
}

const buildMovieResponse = (movie) => {
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

    const { title, overview, poster_path } = movie;
    const result = {
        title,
        desc: overview,
        img_url: `${imageBaseURL}${poster_path}`
    };

    return result;
}

const buildTvShowResponse = (tvShow) => {
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

    const { name, overview, poster_path } = tvShow;
    const result = {
        title: name,
        desc: overview,
        img_url: `${imageBaseURL}${poster_path}`
    };

    return result;
}

// nothing to build, data is formatted before its added to cache
const buildVideoResponse = (video) => video;

const buildGameResponse = (game) => {
    const { name, rating, background_image, stores} = game;
    
    const result = {
        title: name,
        img_url: background_image,
        rating: rating,
        stores:  stores.map(function(item){
            const { store, url_en } = item;
            return  { 
            name: store.name,
            domain: store.domain,
            image: store.background_image,
            url: url_en
        }})
    };

    return result;
}

module.exports = {
    getRandomIndex,
    getRandomValueFromArray,
    truncateText,
    buildResponse,
    buildMovieResponse,
    buildVideoResponse,
    buildGameResponse 
}