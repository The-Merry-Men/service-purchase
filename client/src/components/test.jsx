import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${props => props.open === 'hi' ? 'white' : 'black'}
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Test = (props) => (
    <Wrapper>
        <Title>HELLO WORLD, BUY MY {String(props.open === 'hi')}</Title>
    </Wrapper>
)

export default Test;