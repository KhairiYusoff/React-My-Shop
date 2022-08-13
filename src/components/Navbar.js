import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { mobile } from '../responsive'

const Container = styled.div`
background-color: black;
color:white;
${mobile({ height: "70px", marginBottom: "20px" })}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
height: 30px;
align-items: center;
${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
flex:1;
${mobile({ flex: 2 })}
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 20px;
padding: 5px;
width: 100%;
`

const Input = styled.input`
border: none;
width: 100%;
${mobile({ width: "50px" })}
`
const Center = styled.div`
display: flex;
align-items: center;
flex:3;
${mobile({ flex: 2 })}
`

const Logo = styled.h1`
font-weight: bold;
font-size: 20px;

`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItems = styled.div`
font-size: 14px;
cursor: pointer;
margin: 15px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>KhaiShop</Logo>
                </Left>
                <Center>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <SearchIcon />
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN-IN</MenuItems>
                    <ShoppingCartIcon />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar