import { useState } from "react";
import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";


export default function CashOut(){
    const [value, setValue] = useState();
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <Container>
            <Title>Nova saída</Title>
            <Form>
                <input type="number" placeholder="Valor" required onChange={e => setValue(e.target.value)} disabled={disabled}></input>
                <input type="description" placeholder="Descrição" required onChange={e => setDescription(e.target.value)} disabled={disabled}></input>
                <button disabled={disabled}>{loading ? <BeatLoader color="white" size={15} /> : <span>Salvar Entrada</span>}</button>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Title = styled.h2`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-top: 10px;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input{
        margin-top: 15px;
        width: 100%;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #d5d5d5;
        border-radius: 5px;

        ::placeholder{
            padding-left: 15px;
            width: auto;
            height: 23px;
            left: 40px;
            top: 251px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
    }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;    
        border: none;
        margin-top: 15px;
        margin-bottom: 36px;
        width: 100%;
        height: 46px;
        left: 23px;
        top: 375px;
        background: #A328D6;
        border-radius: 5px;

        span{
            width: auto;
            height: 23px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #FFFFFF;
        }

        :hover{
            cursor: pointer;
        }
    }
`;