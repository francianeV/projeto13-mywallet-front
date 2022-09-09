import styled from "styled-components";

export default function LoginTop(){
    return(
        <Logo>
            <h1>MyWallet</h1>
        </Logo>)
}

const Logo = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 100px;

    h1{
        text-align:center;
        width: 147px;
        height: 50px;
        left: 113px;
        top: 159px;
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #fff;
    }
    
`;