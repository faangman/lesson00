import React from 'react';
import logo from './images/Image01.svg';
import './App.css';
import {ButtonArea, StyledBtn} from "./components/Button.styled";
import {TextArea} from "./components/TextArea.styled";
import {Box, Card, ImgStyled} from "./components/Div.styled";



function App() {
  return (
    <div className="App">
        <Box>
            <Card>
                <ImgStyled src={logo} alt="Rectangle 1"/>
                <TextArea>
                    <h3>Headline</h3>
                    <p>Faucibus. Faucibus. Sit sit sapien sit<br/> tempusrisu ut. Sit molestie ornare in venen.</p>
                </TextArea>
                <ButtonArea>
                    <StyledBtn btnType={"blue"}>See more</StyledBtn>
                    <StyledBtn btnType={"white"}>Save</StyledBtn>
                </ButtonArea>
            </Card>
        </Box>
    </div>
  );
}

export default App;



