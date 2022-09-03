
import styled from 'styled-components';

export const ItemSpanStyle = styled.span`
    display: inline-block;
   
    min-width: 120px;
    margin-right: 10px;
    `
export const DelButtonStyle = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
box-sizing: content-box;
padding: 5px;
border-radius: 5px;




&:hover {
    background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
-23px 0 20px -23px rgba(0, 0, 0, .8),
23px 0 20px -23px rgba(0, 0, 0, .8),
0 0 40px rgba(0, 0, 0, .1) inset;
}   
`