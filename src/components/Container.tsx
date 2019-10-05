import styled from 'styled-components/native';

interface IProps {
    backgroundColor?: string
    marginTop?: string
    marginBottom?: string
    flex?: number
}

const Container = styled.View`
    width: 100%;
    flex: ${ (p:IProps) => p.flex || '1'};
    margin-top: ${ (p:IProps) => p.marginTop || 'auto'};
    margin-bottom: ${ (p:IProps) => p.marginBottom || 'auto'};
	background-color: ${ (p:IProps) => p.backgroundColor || 'papayawhip'};
	justify-content: center;
    align-items: center;
    justify-content:space-around;
`;

export default Container;