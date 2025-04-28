import styled from "styled-components";
import { Icono } from '../../index';

export function Btnsave({funcion,titulo,bgcolor,icono}) {
    return(
        <Container type="submit" bgcolor={bgcolor}>
            <Icono>{icono}</Icono>
            <span className="icono">{icono}</span>
            <span className="btn" onClick={funcion}>{titulo}</span>
        </Container>
    )
}

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;
    gap: 10px;
    background-color: initial;
    .btn{
        background: ${(props)=>props.bgcolor};
        padding: 0.6rem 1.3rem;
        font-weight: 900;
        font-size: 18px;
        border: 3px solid black;
        border-radius: 0.4rem;
        box-shadow: 0.1rem 0.1rem #000;
        transition: 0.2s;
        white-space: 1px;
        color: #000;
        cursor: pointer;
        &:hover{
            transform: translate(-0.05em, -0.05em);
            box-shadow: 0.15em 0.15em #000;
        }
        &:active{
            transform: translate(-0.05em, -0.05em);
            box-shadow: 0.15em 0.15em #000;
        }
    }
`;