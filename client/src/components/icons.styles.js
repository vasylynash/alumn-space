import styled from 'styled-components';

export const BackArrow = styled.i`
    position: ${(props)=>props.position || 'fixed'};
    color: ${(props)=>props.color || 'black'};
    top: ${(props)=>props.top || '20px'};
    left: ${(props)=>props.left || '40px'};
    font-size: 30px;
    transition: ease-in-out 0.3s;

&:hover {
    color: #FF8985;
    transform: scale(1.1);
}
`
