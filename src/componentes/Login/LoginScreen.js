import LoginTop from "./LoginTop";
import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisable] = useState(false);

    return(
        <Container>
            <LoginTop />
            <Form>
                <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)}></input>
                <input type="password" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)}></input>
                <button disabled={disabled}><span>Entrar</span></button>
            </Form>
            <Link to={"/cadastro"}>
                <Register>Não tem conta? Cadastre-se!</Register>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;

    input{
        margin-top: 15px;
        width: 100%;
        height: 58px;
        background: #FFFFFF;
        border: 1px solid #d5d5d5;
        border-radius: 5px;

        ::placeholder{
            padding-left: 15px;
            width: 60px;
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
            width: 59px;
            height: 23px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
    }
`;

const Register = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 18px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
`;