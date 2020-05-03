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
    if (dataType === 'movies') {
        return buildMovieResponse(randomValue);
    }
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


module.exports = {
    getRandomIndex,
    getRandomValueFromArray,
    buildResponse,
    buildMovieResponse
}