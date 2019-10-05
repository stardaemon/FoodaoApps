import { CONST } from "../config/const";
import Dish from "../model/Dish";

export const addToCart = (dish: Dish | string) => {
    return {
        type: CONST.cart.add,
        payload: dish
    }
}

export const minusFromCart = (dish: Dish | string) => {
    return {
        type: CONST.cart.minus,
        payload: dish
    }
}