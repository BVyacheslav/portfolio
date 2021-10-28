import { SetHideAction, LifeGameActionEnum } from "./types";

export const LifeGameActionCreators = {
    setShow: (id: number): SetHideAction => ({type: LifeGameActionEnum.SET_HIDE, payload: id})
}