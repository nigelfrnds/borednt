import axios from 'axios';

// use "fetch" used for functions use axios
export const fetchRandomMovie = async () => {
    try {
        const request = await axios.get('/api/movies');
        if (request.status >= 400) throw new Error('API request failed');

        const data = request.data;
        return data;
    } catch (e) {
        console.log('Error fetching random movie: ', e);
        throw e;
    }
}