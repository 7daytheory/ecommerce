import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
flex:1;
cursor: ponter;
display: flex;
align-items: center;
`

const Language = styled.span`font-size: 14px;`

const SearchContainer = styled.div`
    border: 0.5px solid #999;
    border-radius: 3px;
    align-items: center;
    display: flex;
    margin-left: 20px;
    padding: 2px;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Center = styled.div`flex:1;align-items:center;`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Nav = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN / FR</Language>
                <SearchContainer>
                    <Search style={{color:'#999', fontSize:16}}/>
                    <Input />
                </SearchContainer>
            </Left>
            <Center>
                <Logo style={{textAlign: 'center'}}>Kansas City Chiefs</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={0} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Nav
