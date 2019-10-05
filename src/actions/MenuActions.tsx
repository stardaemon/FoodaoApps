import { CONST } from "../config/const";

export const moveToTable = () => {
    return {
        type: CONST.menuActions.MOVE_FORWARD
    }
} 

export const moveToMenu = () => {
    return {
        type: CONST.menuActions.MOVE_MENU
    }
}

export const moveToCart = () => {
    return {
        type: CONST.menuActions.MOVE_CART
    }
}
