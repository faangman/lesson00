import styled from "styled-components";
import '../fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
export const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    min-width: 300px;
    min-height: 350px;
    box-shadow: 0 4px 20px 5px #0000001A;
    border-radius: 15px;
    background-color: #ffffff;
    text-align: left;
    font-family: Inter, sans-serif;
    
    @font-face {
        font-family: 'Inter';
        src: local('Inter'), url("../fonts/Inter/Inter-VariableFont_slnt,wght.ttf");
    }
`

export const ImgStyled = styled.img`
    margin-top: 10px;
    margin-left: 10px;
`