import { CONST } from '../config/const';

interface moveToTableType {
    type: string
}

const moveForward = (state = CONST.menu.IsTakeAwayPage, action:moveToTableType) => {
    switch (action.type) {
        case CONST.menuActions.MOVE_FORWARD: 
            return CONST.menu.TableNumberPage
        case CONST.menuActions.MOVE_MENU:
            return CONST.menu.MenuPage
        case CONST.menuActions.MOVE_CART:
            return CONST.menu.CartPage
        default:
            return state
    }
}

export default moveForward;