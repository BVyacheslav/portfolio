import { ProjectListState } from "./types";

const initialState: ProjectListState = {
    projects: [
        {
            id: 1,
            img: '../images/apple.png',
            title: 'Сайт портфолио',
            description: 'Сайт с моими пет проектами. Стек технологий: JavaScript, React, Redux, TypeScript, Material-UI, HTML, CSS'
        },
        {
            id: 2,
            img: '../images/apple.png',
            title: 'База фильмов',
            description: 'Проект с получением фильмов из api'
        },
        {
            id: 3,
            img: '../images/apple.png',
            title: 'Игра Life',
            description: 'Квест о повседневной жизни'
        }
    
    ]
};

export default function projectListReducer(state = initialState, action: any) {
    switch (action.type) {  
        default: 
            return {...state};
    }
}