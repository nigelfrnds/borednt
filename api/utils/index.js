const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
}

const getRandomValueFromArray = (list) => {
    const randomIndex = getRandomIndex(list.length);
    const randomValue = list[randomIndex];

    return randomValue;
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

const buildGameResponse = (game) => {
    const { name, rating, background_image, stores} = game;
    
    const result = {
        title: name,
        img_url: background_image,
        rating: rating,
        stores:  stores.filter(({store: {name}}) =>  name == "Steam")
    };

    return result;
}

module.exports = {
    getRandomIndex,
    getRandomValueFromArray,
    buildResponse,
    buildMovieResponse,
    buildGameResponse 
}