import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section( {title,description,leftButtonText,rightButtonText,backgroundImg} ) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Button>
                <Fade bottom>
                        <ButtonGoupe>
                            <LeftButton>{leftButtonText}</LeftButton>
                            {rightButtonText &&
                            <RightButton>{rightButtonText}</RightButton>
                        }
                        </ButtonGoupe>
                </Fade>
                <DownArrow src="./images/down-arrow.svg" />
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
        width : 100vw;
        height : 100vh;
        background-image : url('/images/model-s.jpg');
        background-size: cover;
        background-repeat : no-repeat;
        background-position: center;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-image : ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
     padding-top:15vh;
     text-align: center;
`
const ButtonGoupe = styled.div`
     display: flex;
     gap:0.5rem;
     margin-bottom:30px;
     @media (max-width: 760px){
         flex-direction:column;
     }
`
const LeftButton = styled.div`
    width: 250px;
    height:40px;
    background-color: rgba(23,26,32,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 100px;
    opacity:0.85;
    text-transform;
    font-size:15px;
    cursor:pointer;
    font-weight:600;
     
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity:0.85;
    color:black;
`
const DownArrow = styled.img`
     
     height:40px;
     animation: animateDown infinite 1.5s;
`
const Button = styled.div`
     
`