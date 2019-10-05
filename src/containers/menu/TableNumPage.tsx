import React, { Component } from 'react';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { CONST } from '../../config/const';
import { TextInput } from 'react-native';
import store from '../../store';
import { InputTableNumber } from '../../actions/TableNumInputAction';
import { moveToMenu } from '../../actions/MenuActions';

class TableNumPage extends Component {
    continue = () => {
        store.dispatch(moveToMenu())
    }


    updateTableNum = (text:string) => {
        store.dispatch(InputTableNumber(text))
    }

    render() {
        return (
            <Container>
                <Container style={{height: 5, flex: 0}}>
                    <Button
                        title= {CONST.strings.StillTakeAway}
                        onPress={() => this.continue()} />   
                </Container>
                <Container>
                    <TextInput
                        style={{borderWidth:0.5, borderRadius: 0.3, borderColor:"#d6d7da" }}
                        onChangeText={text => this.updateTableNum(text)}
                        keyboardType={'numeric'}
                        placeholder= {CONST.strings.TableNumberPlaceHolder}                    
                        />
                    <Button
                        title="Continue"
                        onPress={() => this.continue()} />
                </Container>
            </Container>
        );
    }
}

export default TableNumPage;