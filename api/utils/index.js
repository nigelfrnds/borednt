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
        default:
            break;
    }

    return response;
}

const buildMovieResponse = (movie) => {
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

    const { title, overview, poster_path } = movie;
    const result = {
        title: title,
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


module.exports = {
    getRandomIndex,
    getRandomValueFromArray,
    buildResponse,
    buildMovieResponse
}