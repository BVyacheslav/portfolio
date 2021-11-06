
export default class FilmService {
    constructor() {
        this._apiBase = 'https://kinopoiskapiunofficial.tech/api/v2.2';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': '506561c8-e200-4a9c-9819-39799a5398da',
                'Content-Type': 'application/json',
            },
        })
        if (!res.ok) {
            console.log(res.ok)
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
            
        }
        return await res.json();
    }
    getFilm(id) {
        return this.getResource(`/films/${id}`);
    }
}


// const _apiBase = 'https://kinopoiskapiunofficial.tech/api/v2.2';

// export const getResource = async (url) => {
//         const res = await fetch(`${_apiBase}${url}`, {
//             method: 'GET',
//             headers: {
//                 'X-API-KEY': '506561c8-e200-4a9c-9819-39799a5398da',
//                 'Content-Type': 'application/json',
//             },
//         })
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, received ${res.status}`);
//         }
//         return await res.json();
//     };

// export const getFilm = (id) => {
//         return this.getResource(`/films/${id}`);
//     }

// fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
//     method: 'GET',
//     headers: {
//         'X-API-KEY': '506561c8-e200-4a9c-9819-39799a5398da',
//         'Content-Type': 'application/json',
//     },
// })
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))