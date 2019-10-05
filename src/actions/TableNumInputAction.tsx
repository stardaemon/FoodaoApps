import { CONST } from "../config/const";

export const InputTableNumber = (text:string) => {
    return {
        type: CONST.TableNumberInputAction.INPUT_NUMBER,
        payload: text
    }
}