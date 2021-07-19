// Your API key: 563492ad6f917000010000017ed98e5e756142bba8e514609a409922

function getFetch(queryValue, perPage, page) {

    const API_KEY = '563492ad6f917000010000017ed98e5e756142bba8e514609a409922';

    const BASE_URL = 'https://api.pexels.com/';

    const endpoint = 'v1/search';

    // const queryValue = 'flower';

    let queryParams = `${endpoint}?query=${queryValue}&page=${page}&per_page=${perPage}`;

    let url = BASE_URL + queryParams;

    const options = {
        method: 'GET', //'GET' || 'OST' || 'PUT' || 'PUTCH' || 'DELETE'
        headers: {
            Authorization: API_KEY,
        },
        //body: {}
    };

    const response = fetch(url, options).then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            alert('Повторите, пожалуйста, запрос');
        }
    }).then((data) => {
        console.log(data);
        return data.photos;
    }).then((array) => {
        console.log(array);
        if (array.length === 0) {
            alert('Ответ пуст');
            return;
        };
        const imgList = array.map(item => {
            console.log(item.src.tiny);
            let img = document.createElement('img');
            img.src = item.src.tiny;
            return img;
        })
        console.log(imgList);
        document.getElementById('img-list').append(...imgList);
    });
};

const form = document.querySelector('form');
console.dir(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let queryValue = e.target.elements.queryValue.value;
    getFetch(queryValue, 5, 2);
    form.reset()
});

const loadMore = document.getElementById('load_more');

loadMore.addEventListener('click', (e) => {
});


// import { createClient } from '../node_modules/pexels/dist/main.js';

// import { createClient } from 'pexels';
// console.log(createClient);

// const API_KEY = '563492ad6f917000010000017ed98e5e756142bba8e514609a409922';

// const client = createClient(API_KEY);

// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {
//     console.log(photos);
// });
