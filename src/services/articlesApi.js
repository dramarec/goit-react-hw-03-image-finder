import axios from 'axios';


const fetchArticlesWithQuery = (searchQuery, page = 0) => {
    const key = '19535074-e31d7f60a5e9484c321caf15b';
    return axios
        .get(
            ` https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => response.data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchArticlesWithQuery };
