import styled from "styled-components";

export const Surface = styled.div`
height: 100vh;
width: 100vw;

background-image: linear-gradient(#fafafa, #fafafa,#fafafa);
`;
export const BoxRow = styled.div.attrs({ className: 'flex flex-row' })``
export const Bottom = styled.button.attrs({ className: 'bg-primary rounded-md ' })``

export const Input = styled.input.attrs({ className: ' p-2 rounded-md shadow-md w-full ' })``
export const Card = styled.div.attrs(props => ({ className: ' bg-withe rounded-md shadow-md ' + props.className }))`
background-color: #fff;
`
export const Text = styled.p`
font-size: 14px;
`
export const Title = styled.p`
font-size: 20px;
`