import React, { Component } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: palevioletred;
`;

class MyScreen extends Component {
    render() {
        return (
            <Container>
                <Title>
                    My Page
                </Title>
            </Container>
        );
    }
}

export default MyScreen;
