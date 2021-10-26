export interface LifeGameState {
    places: Array<{ id: number, img: string }>,
    food: Array<{ id: number, img: string, width: string, positionX: string, positionY: string, show: boolean }>
}