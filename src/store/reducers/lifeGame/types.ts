export interface LifeGameState {
    places: Array<{ id: number, img: string }>,
    food: Array<{ id: number, img: string, positionX: number, positionY: number, show: boolean }>
}