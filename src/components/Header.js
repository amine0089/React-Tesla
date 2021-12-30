import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false);
    return (
        <Container>
            <a href='#'>
                <img src='./images/logo.svg' />
            </a>
            <Menu>
                    <p><a href='#'>Model S</a></p>
                    <p><a href='#'>Model 3</a></p>
                    <p><a href='#'>Model X</a></p>
                    <p><a href='#'>Model Y</a></p>
                    
            </Menu>
            <RightMenu>
                    <a href='#'>SHOP</a>
                    <a href='#'>TESLA ACOUNT</a>
                    <CustomIcon onClick={()=> setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseDive>
                    <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseDive>
                <li><a href='#'>Exisiting Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in </a></li>
                <li><a href='#'>CyberTruck </a></li>
                <li><a href='#'>Roadaster</a></li>
                <li><a href='#'>Exisiting Inventory</a></li>
                <li><a href='#'>Exisiting Inventory</a></li>
                <li><a href='#'>Exisiting Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header
const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 20px;
    width:100%;
    z-index:10;
`
const Menu = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    p{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
    @media(max-width: 760px){
        display:none;
    }
`
const RightMenu = styled.div`
        font-weight: 600;
        text-transform: uppercase;
        display:flex;
        align-items:center;
        a{
            margin-right:10px;
        }
`
const CustomIcon = styled(MenuIcon)`
        cursor:pointer;
`
const BurgerNav = styled.div`
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        background:white;
        width: 300px;
        z-index:999;
        list-style:none;
        padding:20px;
        displa:flex;
        flex-direction: column;
        text-align: start;
        transition : 0.6s;
        transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
        li{
            padding: 15px 0px;
            border-bottom: 1px solid rgba(0,0,0, .2);
            a{
                font-weight:600;
            }
        }
`
const CustomClose = styled(CloseIcon)`
        cursor:pointer;
`
const CloseDive = styled.div`
        display:flex;
        justify-content: flex-end;
`