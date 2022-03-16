import styled from "styled-components";

export const Surface = styled.div`
height: 100vh;
width: 100vw;

background-image: linear-gradient(#fafafa, #fafafa,#fafafa);
`;
export const BoxRow = styled.div.attrs({ classname: 'flex flex-row' })`
`
export const Card = styled.div.attrs({ classname: 'bg-withe rounded-md shadow-md ' })`
background-color: #fff;
`
export const Text = styled.p`
font-size: 14px;
`
export const Title = styled.p`
font-size: 20px;
`