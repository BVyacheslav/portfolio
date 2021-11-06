import React, { useEffect, useState } from 'react';
import FilmService from '../../services/FilmService';

const Films = () => {

    const filmService = new FilmService();
    const [film, setFilm] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');

    const updateFilm = () => {
        const id = Math.floor(Math.random()*400 + 300);
        filmService.getFilm(id)
            .then((film) => {
                setFilm(film.nameRu)
                setYear(film.year)
                setRating(film.ratingKinopoisk)
            })
    }

    useEffect (() => {
        if(!film) {
        updateFilm();
    }
    })

    return (
        <div>
            Название: {film} <br />
            Год: {year} <br />
            Рейтинг на кинопоиске: {rating}
        </div>
    );
};

export default Films;