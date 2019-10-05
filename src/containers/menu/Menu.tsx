import React, { Component } from 'react';
import { CONST } from '../../config/const';
import store from '../../store';
import { View } from 'react-native';
import IsEatInPage from './IsEatInPage';
import TableNumPage from './TableNumPage';
import MenuDetail from './MenuDetail';
import CartDetail from './Cart';

class Menu extends Component {
    state = this.getCurrentStateFromStore()
    unsubscribeStore: any;


    getCurrentStateFromStore() {
        return {
            menuReducer: store.getState().menuReducer
        }
    }

    updateStateFromStore = () => {
        const currentState = this.getCurrentStateFromStore();
        
        if (this.state !== currentState) {
          this.setState(currentState);
        }
      }
      
    componentDidMount() {
        this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }
      
    componentWillUnmount() {
        this.unsubscribeStore();
    }

    render() {

        return (
            <View style={{height:"100%"}}>
                { this.state.menuReducer === CONST.menu.IsTakeAwayPage &&
                    <IsEatInPage />}
                { this.state.menuReducer === CONST.menu.TableNumberPage &&
                    <TableNumPage />}
                { this.state.menuReducer === CONST.menu.MenuPage &&
                    <MenuDetail />}
                { this.state.menuReducer === CONST.menu.CartPage && 
                    <CartDetail />}
            </View>
        );
    }
}

export default Menu;