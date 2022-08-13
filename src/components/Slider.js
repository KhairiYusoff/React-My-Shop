import React from 'react'
import styled from 'styled-components'
// import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { sliderItems } from "../data"
import { mobile } from '../responsive';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
overflow: hidden;
position: relative;
${mobile({ display: "none" })}
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: wheat;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props => props.slideIndex * -100}vw);
transition: all 1.5s ease;
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${props => props.bg};
`
const ImageContainer = styled.div`
height: 100%;
flex: 1;
`

const Image = styled.img`
height: 100%;
`

const InfoContainer = styled.div`
flex: 1;
padding: 20px;
`

const Title = styled.h1`
font-size: 60px;
color: white;
`

const Description = styled.p`
font-size: 20px;
margin: 50px 0;
font-weight: 500;
color: white;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
color: white;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosIcon />
            </Arrow>
        </Container>
    )
}

export default Slider