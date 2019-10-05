<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { CONST } from '../../config/const';
import { moveToTable } from '../../actions/MenuActions';
import { moveToMenu } from '../../actions/MenuActions';
import store from '../../store';


class  IsEatInPage extends Component  {
    
    takeAway = () => {
        store.dispatch(moveToMenu());
    }

    eatIn = () => {
        store.dispatch(moveToTable());
    }
    
    render() {
        return (
            <Container>
                <Container marginTop='200px'>
                    <Text color="black">
                        {CONST.strings.InitialSelction}
                    </Text>
                    <Button
                        title="Take Away"
                        onPress={() => this.takeAway()} />
                    <Button
                        title="Eat In"
                        onPress={() => this.eatIn()} />
                </Container>
            </Container>
        );
    }
}

export default IsEatInPage;