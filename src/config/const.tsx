import Dish from '../model/Dish';

const tastes1 = ["hot", "salt", "sugar"]
const Dish1 = new Dish("dish1", "sth inside", "ele1,2,3","1.png","v1.mp4", 5.00, tastes1);
const Dish2 = new Dish("dish2", "sth inside", "ele1,2,3","1.png","v1.mp4", 6.00, tastes1);
const Dish3 = new Dish("dish3", "sth inside", "ele1,2,3","1.png","v1.mp4", 7.00, tastes1);
const Dish4 = new Dish("dish4", "sth inside", "ele1,2,3","1.png","v1.mp4", 8.00, tastes1);
const Dish5 = new Dish("dish5", "sth inside", "ele1,2,3","1.png","v1.mp4", 1.00, tastes1);
const Dish6 = new Dish("dish6", "sth inside", "ele1,2,3","1.png","v1.mp4", 2.00, tastes1);
const Dish7 = new Dish("dish7", "sth inside", "ele1,2,3","1.png","v1.mp4", 3.00, tastes1);


export const CONST = {
    menu: {
        IsTakeAwayPage: 0,
        TableNumberPage: 1,
        MenuPage: 2,
        CartPage: 3,
        ConfirmPage: 4,
    },

    menuActions: {
        MOVE_FORWARD: 'MoveForward',
        MOVE_MENU: 'MoveMenu',
        MOVE_CART: 'MoveCart',
    },

    TableNumberInputAction: {
        INPUT_NUMBER: '-1',
    },

    strings: {
        InitialSelction: 'Please select if you want to take away or you are in the store now? ',
        StillTakeAway: 'Oh, I wanna take away',
        TableNumberPlaceHolder: 'Input My Table Number'
    },

    activeCategories: {
        noodle: 0,
        rice: 1,
        drink: 2
    },

    cart:{
        add: 'AddToCart',
        minus: 'MinusFromCart',
    },

    noodle: [Dish1, Dish2, Dish3],
    rice: [Dish4, Dish5, Dish6, Dish4, Dish4, Dish4, Dish4,
        Dish4, Dish4, Dish4, Dish4, Dish4, Dish4, Dish4, 
        Dish4, Dish4, Dish4, Dish4, Dish4, Dish4, Dish4, 
        Dish4, Dish4, Dish4, Dish4, Dish4, Dish4, Dish4, 
        Dish4, Dish4, Dish4, Dish4, Dish4, Dish4,],
    drinks: [Dish7],
}