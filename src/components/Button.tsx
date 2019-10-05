import styled from 'styled-components/native';
import React from 'react';

interface IProps {
    backgroundColor? :string,
    textColor? :string,
    onPress? : Function,
    title? :string
}

const ButtonContainer = styled.TouchableOpacity`
	height: 40px
	padding: 12px;
    border-radius: 10px;	
    margin-top: 5px;
    margin-bottom: 5px;
	background-color: ${ (props:IProps) => props.backgroundColor ? props.backgroundColor : 'blue'};
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${ (props:IProps) => props.textColor ? props.textColor : 'black' };
    text-align: center;
`;

const CustomButton = (props: IProps) => (
	<ButtonContainer
		onPress={ () => props.onPress && props.onPress()}
		backgroundColor={props.backgroundColor}
	>
		<ButtonText textColor={props.textColor}>{props.title}</ButtonText>
	</ButtonContainer>
);

export default CustomButton;