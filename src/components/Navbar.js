import React from 'react';
import styled from 'styled-components';
function Navbar() {
  return (
    <Container>
        <Logo>
            <img src="./logo.png" ait ="/" />
        </Logo>
        <SearchBar>
            <input type="text" placeholder="Search ..."/>
        </SearchBar>
        <Icons>
            <Icon>
                <img src="./41-home.svg" alt="/" />
            </Icon>
            <Icon>
                <img src= "./40-add-card.svg" alt="/" />
            </Icon> 
            <Icon>
                <img src="./47-chat (1).svg" alt="/" />
            </Icon>
            <Icon>
                <img src="./user.png" alt="" />
            </Icon>
        </Icons>

    </Container>
   
  );
}
const Container = styled.div`
    height: 60px;
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    border-bottom: 1px solid lightgray;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;

    @media only screen and (max-width: 768px) {
    justify-content: space-around;
    }

`;

const Logo = styled.div`
  cursor: pointer;
`;

const SearchBar = styled.div`
    height: 30px;
    width: 268px;
    padding: 3px 16px 3px 16px;
    min-height: auto;
    min-width: auto;
    background-color: #efefef;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      background-color: transparent;
      border: none;
      outline: none;
      line-height: 18px;
      font-size: 14px;
      width: 90%;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }

`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    width: 180px;
    justify-content: space-evenly;
    height: 40px;
    
`;

const Icon = styled.div`
    width: 35px;
    height: 35px;
    cursor: pointer;

    img {
     width: 25px;
     height: 25px;
    }

    &:nth-child(4) {
     img {
        border-radius: 50%;
      }
      position: relative;
    }

`;

export default Navbar;