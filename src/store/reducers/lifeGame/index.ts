import { LifeGameAction, LifeGameActionEnum, LifeGameState } from "./types";


const initialState: LifeGameState = {
    places: [
        {
            id: 1,
            img: '../images/room.jpg'
        },
        {
            id: 2,
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
            hide: false
        },
        {
            id: 2, 
            img: '../images/burger.png', 
            width: '18vmin',
            positionX: '66vmin', 
            positionY: '13vmin', 
            hide: false
        }
    ]
}

export default function lifeGameReducer(state = initialState, action: LifeGameAction): LifeGameState {
    switch (action.type) {
        case LifeGameActionEnum.SET_HIDE:  
            return {
                ...state, 
                food: state.food.map(
                    (item, i) => i === action.payload ? {...item, hide: true} : item
                )}
        default:
            return state;
    }
}



