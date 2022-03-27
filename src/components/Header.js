import React from "react";
import styled from 'styled-components';
import "../css/index.css";

const HeaderBar = styled.header`
  height: 10%;
  display: flex;
  padding: 20px 0 20px 30px;
  align-items: center;
  background-color: rgb(31, 41, 51);
  --header-shadow: 5px 5px 12px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
  box-shadow: var(--header-shadow);

`;


const Title = styled.span`
  font-weight: 500;
  transition: color 300ms;
  text-decoration: none;
  user-select: none;
  color: #ffffff;
`;

function Header() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })

        }

        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    let width = 120,
        fontWidth = 40;

    if (dimensions.width >= 700 && dimensions.width <= 970) {
        width = 80;
        fontWidth = 30;
    } else if (dimensions.width < 700) {
        width = 70;
        fontWidth = 20;
    }


    return (
        <HeaderBar>
            <img style={{width: width, marginRight: "30px"}} src={"/logos/wcilogo.png"} alt="Logo" />
            <Title style={{fontSize: fontWidth}} href="/" className="no-select">WCI Ukraine Fundraiser</Title>
        </HeaderBar>
    )

}

export default Header;
