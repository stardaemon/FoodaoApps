import { CONST } from '../config/const';

interface inputTableNumberType {
    type: string,
    payload?: string
}

const inputTableNumber = (state = CONST.TableNumberInputAction.INPUT_NUMBER, action:inputTableNumberType) => {
    if (action.type == CONST.TableNumberInputAction.INPUT_NUMBER) {
        if (action.payload) {
            return action.payload
        }
    }
    
    return state
}

export default inputTableNumber;