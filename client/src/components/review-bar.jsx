import React from 'react';
import styled from 'styled-components';

const ReviewBarWrapper = styled.div `
    border: 1px solid black;
    width: 228px;
    background: ${props => props.open ? "white" : "#1b1b1d"}
    border: 1px solid ${props => props.open ? "rgb(224, 224, 224)" : "black"};
    box-shadow: 1px 1px 10px 1px ${props => props.open ? "whitesmoke" : "black"};
`

const LeftLine = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ErrorText = styled.div `
    font-size: 13px;
    font-weight: 400;
    font-family: "DIN Pro", -apple-system, BlinkMacSystemFont, sans-serif;
    color : ${props => props.open ? "black" : "white"};
`
const ErrorImg = styled.span `
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: white;
    color: black;
    display: inline-block;
    text-align: center;
    font-size: 11px;
`

class ReviewBar extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    if (this.props.error) {
      return (
        <ReviewBarWrapper>
            <LeftLine>
                <ErrorImg><span>!</span></ErrorImg>
                <ErrorText>Error</ErrorText>
            </LeftLine>
            <LeftLine>
              <ErrorText>Please enter a valid number of shares.</ErrorText>
            </LeftLine>
        </ReviewBarWrapper>
      )
    } else {
      return (null)
    }
  }
}

export default ReviewBar