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
            positionX: 70, 
            positionY: 70, 
            show: true
        },
        {
            id: 2, 
            img: '../images/apple.png', 
            positionX: 700, 
            positionY: 70, 
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



