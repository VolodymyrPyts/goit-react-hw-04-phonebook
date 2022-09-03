import styled from 'styled-components';

export const LabelStyle = styled.label`
display: flex;
    padding: 8px;
    height: 20px;
    margin-bottom: 16px;
    justify-content: space-between;
    align-items: center;



`
export const ButtonStyle = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
box-sizing: content-box;
padding: 5px;
border-radius: 5px;
margin-left: 285px;



&:hover {
    background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
}   
`

export const TitleStyle = styled.h1`
display: flex;
justify-content: center;
margin: 0;
margin-bottom: 20px;


`