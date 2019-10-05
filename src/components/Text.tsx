import styled from 'styled-components/native';

interface IProps {
    fontSize? : string
    color?: string
}

const Text = styled.Text`
	font-size: ${(p:IProps) => p.fontSize || '20px'};
	font-weight: 500;
	color: ${(p:IProps) => p.color || 'palevioletred'};
	text-align: center;
`;

export default Text;