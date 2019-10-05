<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { Image, View, ScrollView } from 'react-native';
import { CONST } from '../../config/const';
import { moveToMenu } from '../../actions/MenuActions';
import { addToCart, minusFromCart } from '../../actions/CartActions';
import store from '../../store';
import DateTimePicker from "react-native-modal-datetime-picker";

class  Cart extends Component  {
    state = {
        cart:this.getCurrentCartFromStore().cart,
        summary: this.getCurrentCartFromStore().summary,
        isDateTimePickerVisible: false,
        date: null
    };
    unsubscribeStore: any;

    getCurrentCartFromStore() {
        let cart = store.getState().cartReducer;
        let summary = 0;

        Object.keys(cart).map((key)=> {
            let strs=key.split(";");
            let price=strs[3];
            summary += parseFloat(price) * parseInt(cart[key]);
        });

        console.log(cart)
        console.log(summary)

        return {
            cart: cart,
            summary:summary
        }
    }

    getTableNumberFromStore() {
        return store.getState().tableNumReducer
    }

    updateStateFromStore =() => {
        const currentCartState = this.getCurrentCartFromStore().cart;
        if (this.state.cart !== currentCartState) {
            console.log("======")
            console.log(currentCartState)
            this.setState ({
                cart:currentCartState
            });
        }
    }

    componentDidMount() {
        this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
    }

    componentWillUnmount() {
        this.unsubscribeStore();
    }

    addToCartClick = (dish: string, price:string) => {
        store.dispatch(addToCart(dish));
        this.setState({
            summary: this.state.summary + parseFloat(price)
        })
    }

    minusFromCartClick = (dish:string, price:string) => {
        store.dispatch(minusFromCart(dish));
        this.setState({
            summary: this.state.summary - parseFloat(price)
        })
    }

    backToMenu =() =>{
        store.dispatch(moveToMenu())
    }

    continue =() => {

    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
    
    handleDatePicked = date => {
        this.hideDateTimePicker();
        this.setState({
            date: date
        });
      };
    
    render() {
        const { cart } = this.state;
        const tableNumber = this.getTableNumberFromStore();
        return (
            <Container>
                <Container marginTop='0' style={{justifyContent:"flex-start"}}>
                    { tableNumber != CONST.TableNumberInputAction.INPUT_NUMBER ?
                        <Text> YOUR TABLE NUMBER IS {tableNumber} </Text>
                        :
                        <View>
                            <Button title="Select a pickup time" onPress={this.showDateTimePicker} />
                            <DateTimePicker
                                mode="time"
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                            />
                        </View>
                    }
                    <ScrollView style={{
                        display:"flex",
                        marginBottom: 170
                    }}>
                    {
                        Object.keys(cart).map((key) => {
                            let strs = key.split(";");

                            let src;
                            switch(strs[1]) {
                                case "1.png":
                                    src = require('../../assets/1.png')
                                default:
                                    src = require('../../assets/1.png')
                            }

                            return (
                            <View style={{
                                display:"flex", flexDirection:"row",justifyContent:"flex-start", 
                                marginTop:10, alignItems:"center"}}>
                                <Image source={src} style={{width:40, height:40}} />
                                <View>
                                    <Text> Name: {strs[0]} Taste: {strs[2]} Price: {strs[3]} </Text>
                                    <View>
                                        <Button 
                                            title="-"
                                            onPress={() => this.minusFromCartClick(key,strs[3])} />
                                        <Text>NUMBER: {cart[key]}</Text>
                                        <Button 
                                            title="+"
                                            onPress={() => this.addToCartClick(key, strs[3])} />
                                    </View>
                                </View>
                            </View>
                            );
                        })
                    }
                    </ScrollView>
                    <Container style={{
                        position:'absolute',
                        backgroundColor:'#999999',
                        width:'100%',
                        bottom: 0
                        }}>
                        <Text>
                            Total Price {this.state.summary}
                        </Text>
                        {this.state.date &&  
                            <Text>Pick up time: {this.state.date.toLocaleString()}</Text>}
                        <Button
                            title="Back To Menu"
                             onPress={this.backToMenu} />
                        <Button 
                            title="Confirm"
                            onPress={this.continue} />
                    </Container>
                </Container>
            </Container>
        );
    }
}

export default Cart;