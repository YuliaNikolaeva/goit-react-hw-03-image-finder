import axios from 'axios';

const key = '17236888-5707ed9d6621806b47edb9b46';

const fetchImages = ({ currentPage = 1, searchQuery = '' }) => {
    return axios
        .get(
            `https://pixabay.com/api/?key=${key}&q=${searchQuery}&per_page=12&page=${currentPage}`,
        )
        .then(response => response.data.hits);
};

export default { fetchImages };
