import LoginTop from "./LoginTop";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

export default function SignUp(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conf_password, setConf_password] = useState('');
    const [disabled, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);
    
    function signup(event){
        event.preventDefault();
        
        if(password !== conf_password){
            return alert('Senhas diferentes');
        }else{
            const body = {
                name,
                email,
                password
            }

            setLoading(true);
            setDisable(true);

            const promise = axios.post('http://localhost:5000/sign-up',body);

            promise.then(resp => {
                navigate("/", {replace:true});
                setLoading(true);
                setDisable(true);
            })

            .catch(err => {
                setLoading(false);
                setDisable(false);
                alert("Erro ao realizar o cadastro. Tente novamente!");
            })
        }
    }

    return(
        <Container>
            <LoginTop />
            <Form onSubmit={signup}>
                <input type="name" value={name} placeholder="Nome" required onChange={e => setName(e.target.value)} disabled={disabled}></input>
                <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)} disabled={disabled}></input>
                <input type="password" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)} disabled={disabled}></input>
                <input type="password" value={conf_password} placeholder="Confirme a senha" required onChange={e => setConf_password(e.target.value)} disabled={disabled}></input>
                <button disabled={disabled}>{loading ? <BeatLoader color="white" size={15} /> : <span>Cadastrar</span>}</button>
            </Form>
            <Link to={"/"}>
                <Register>Já tem uma conta? Entre agora!</Register>
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