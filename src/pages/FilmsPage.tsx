import React, { FC } from 'react';
import Films from '../components/films/Films';

const FilmsPage: FC = () => {
    return (
        <div>
            Страница с фильмами
            <Films/>
        </div>
    );
};

export default FilmsPage;