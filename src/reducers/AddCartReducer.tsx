import Dish from '../model/Dish';
import { CONST } from '../config/const'; 

interface cartActionType {
    type: string,
    payload: Dish | string
}

interface stateInterface {
    string?: number
}

const operateToCart = (state : stateInterface = {}, action:cartActionType) => {
    let newDishToString = "";
    if (action.type === CONST.cart.add) {
        newDishToString = typeof(action.payload) === "object" ?
             action.payload.dishName + ";"
            + action.payload.imageName + ";"
            + action.payload.tastes + ";" + action.payload.price
            : action.payload;
        if (state[newDishToString] != null) {
            state[newDishToString] = state[newDishToString] + 1
        } else {
            state[newDishToString] = 1
        }
    } 

    if (action.type === CONST.cart.minus) {
        if (state[action.payload] != null && state[action.payload] > 0) {
            state[action.payload] = state[action.payload] - 1
            if ( state[action.payload] === 0) {
                delete state[action.payload];
            }
        } else {
            delete state[action.payload];
        }
    }
    
    return  state;
}

export default operateToCart;