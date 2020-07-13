import axios from 'axios';

const key = '17236888-5707ed9d6621806b47edb9b46';

const fatchImages = ({ currentPage = 1, searchQery = '' }) => {
    return axios

        .get(
            `https://pixabay.com/api/?key=${key}&q=${searchQery}&per_page=4&page=${currentPage}`,
        )
        .then(response => response.data.hits);
};

export default { fatchImages };
