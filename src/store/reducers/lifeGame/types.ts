export interface LifeGameState {
    places: Array<{ id: number, img: string }>,
    food: Array<{ id: number, img: string, width: string, positionX: string, positionY: string, hide: boolean }>
}

export enum LifeGameActionEnum {
    SET_HIDE = "SET_HIDE"
}

export interface SetHideAction {
    type: LifeGameActionEnum.SET_HIDE;
    payload: number;
}

export type LifeGameAction =
    SetHideAction