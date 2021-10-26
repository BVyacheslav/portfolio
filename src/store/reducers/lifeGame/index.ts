import { LifeGameState } from "./types";


const initialState: LifeGameState = {
    places: [
        {
            id: 1,
            img: '../images/fridge.png'
        }
    ],
    food: [
        {
            id: 1, 
            img: '../images/apple.png', 
            width: '8vmin',
            positionX: '45vmin', 
            positionY: '16vmin', 
            show: true
        },
        {
            id: 2, 
            img: '../images/burger.png', 
            width: '18vmin',
            positionX: '66vmin', 
            positionY: '13vmin', 
            show: true
        }
    ]
}

export default function lifeGameReducer(state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}



