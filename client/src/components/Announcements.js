import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 20px;
background-color: #0F3D3E;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 10px;
font-weight: 500;
`

const Annoucements = () => {
    return (
        <Container>
            50% Daily Brands Discounts!
        </Container>
    )
}

export default Annoucements