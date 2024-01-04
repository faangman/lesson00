import styled, {css} from "styled-components";

export const ButtonArea = styled.div`
    display: flex;
    margin-left: 20px;
    gap: 15px;
`
type StyledBtnPropsType = {
    btnType?: "blue" | "white"
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    border: 2px solid #4E71FE;
    
    ${props => props.btnType === "blue" && css<StyledBtnPropsType>`
        background-color: #4E71FE;
        color: #ffffff;
        
        &:hover {
            background-color: #ffffff;
            color: #4E71FE;
        }
    `}
    
    ${props => props.btnType === "white" && css<StyledBtnPropsType>`
        background-color: #ffffff;
        color: #4E71FE;
        
        &:hover {
            background-color: #4E71FE;
            color: #ffffff;
        }
    `}
`